import fs from 'fs';
import { spawnSync } from 'child_process';

// コマンドライン引数から、projectName を取得
const projectName = process.argv[2];

// プロジェクト名が指定されていない場合はエラーを出力して終了
if (!projectName) {
  console.error('プロジェクト名を指定してください');
  console.error('例: node scripts/generateNewWorkSpace.js projectName');
  process.exit(1);
}

if (fs.existsSync(projectName)) {
  console.error(`プロジェクトが既に存在します: ${projectName}`);
  process.exit(1);
}

// ワークスペースのディレクトリを作成
const workspaceDir = `${projectName}`;
fs.mkdirSync(workspaceDir);

// slidev のプロジェクトを作成
console.log('プロジェクトを作成中...');
const createSlidev = spawnSync('pnpm', 
  [
    'create', 'slidev', 'src'
  ],
  {
  stdio: ['pipe', 'inherit', 'inherit'],
  cwd: workspaceDir,
  input: "n\n" // プロジェクトの作成時に質問に対して回答する(Slidev サーバーを起動しない)
});


if (createSlidev.error) {
  fs.rmdirSync(workspaceDir);
  console.error('プロジェクトの作成に失敗しました');
  process.exit(1);
}

// プロジェクトの作成完了後、pnpm でインストール
console.log('依存関係をインストール中...');
spawnSync('pnpm', ['install'],
  {
    stdio: ['pipe', 'inherit', 'inherit'],
    cwd: `${workspaceDir}/src`
  }
);

// 作成されたpackage.json の修正
console.log('package.json の更新...');
const packageJsonPath = `${projectName}/src/package.json`;
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

// scripts の修正
packageJson.scripts = {
  ...packageJson.scripts,
  "dev": "npm run dev:remote",
  "dev:remote": "slidev --remote",
  "dev:local": "slidev",
  "build": `slidev build --base /${projectName}/ --out ../../dist/${projectName}`,
  "export": `slidev export --timeout 60000 --with-clicks --with-toc --output ../${projectName}.pdf`,
  "lint": "textlint slides.md"
};

// 依存関係の削除
// 依存関係はルートプロジェクトで管理するので、Workspace 内では不要
delete packageJson.dependencies;
delete packageJson.devDependencies;

// package.json の書き込み
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('完了しました');
