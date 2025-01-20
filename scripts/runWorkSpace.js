import fs from 'fs';
import { execSync } from 'child_process';

// コマンドライン引数から、projectName を取得
const projectName = process.argv[2];

// プロジェクト名が指定されていない場合はエラーを出力して終了
if (!projectName) {
	console.error('プロジェクト名を指定してください');
	console.error('例: node scripts/runWorkSpace.js projectName');
	process.exit(1);
}

// 指定されたプロジェクトが存在しない場合はエラーを出力して終了
if (!fs.existsSync(projectName)) {
	console.error(`プロジェクトが存在しません: ${projectName}`);
	process.exit(1);
}

execSync(`pnpm run -C /workspace/${projectName}/src dev`,{
	stdio: 'inherit'
})
