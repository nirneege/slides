# nirneege-slides

## Slidev プロジェクトの起動

```bash
pnpm workspace:run <project-name>
```

## 新しいslidev プロジェクトの作成

プロジェクトルートで以下のコマンドを実行

```bash
pnpm workspace:new <project-name>
```

## ビルドとデプロイ

wrangler を利用して、Cloudflare Pages にデプロイする

あらかじめ、wrangler で認証しておくこと

### ビルド

プロジェクトルートで以下のコマンドを実行

```bash
pnpm run -r build
```

新しいプロジェクトがある場合、リダイレクト用のルールを`dest/_redirects`に追加する  

例: `new_slide` というプロジェクトが追加された場合

```plaintext
/new_slide/* /new_slide/index.html 200
```

### デプロイ

プロジェクトルートで以下のコマンドを実行

```bash
pnpm run deploy
```

WSL2 で実行時、wrangler の認証でエラーになる場合は以下のページを参照
- https://note.miksin.art/jp/notes/cloudflare/in_containers
