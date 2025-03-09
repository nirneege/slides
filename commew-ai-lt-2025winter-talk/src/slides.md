---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
fonts:
  sans: Noto Sans JP
  serif: Noto Serif JP
  mono: Noto Sans Mono
titleTemplate: "%s"
info: |
  ## Commew LT会2025冬の陣
---

# 超短納期の提案書作成をAIの力を借りて乗り切った件について

<!-- <p></p> -->

<p class="text-center">
顧客の無茶ぶりを断れない弱小フリーランスがチートな性能のAIによって無双する！<br />早すぎて検収追いつかないからやめてと言われてももう遅い
</p>

<div class="flex flex-col items-end gap-0">
  <p class="m-0">話す人: ウチイダユウゴ</p>
  <p class="m-0">Commew LT会 2025冬の陣</p>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

<style>
  .flex.flex-col p {
    margin: 0;
  }
</style>

---
transition: slide-up
---

# いきさつ

- 4月以降発注、6月末に納品としてほしい開発案件の相談
- 要求は明確ではなく、現用システム(別のSaaS)の機能をベースに、運用改善をしてほしいとのこと
- 来年度の予算確保のため、2月末での稟議にかけたいので提案書をまとめてほしい
  - ...と2月中旬に依頼される
- 管理用サイトと、ユーザーサイト合わせて30画面程度
- 普通にやったら絶対終わらない

---
transition: slide-up
level: 2
---

# たすけて生成AI！

<p></p>

人力での作業をできる限り減らし、なるべくAIに任せることに

お願いしたのは以下

- 各画面に含めるべき項目や表記内容の列挙
  - Claude Sonnet
- <span v-mark.red="1">それをもとにしたモックアップ</span>
  - <span v-mark.circle.orange="1">Vercel v0</span>
- fit & gap, 要求内容の要約など提案書に掲載する書面案の生成
  - Google Gemini 2.0
- ※この発表のサブタイトル
  - Perplexity


---

# 人間がやったこと

- クライアントからのヒアリング
  - 現用サービスの課題や改善希望を聞き出す
- Powerpoint の提案書の調整
  - Office 365 のAI機能は別料金っぽくて使えなかった...
- 作成した提案書の説明とモックアップ操作でのイメージづけ
  - 提案書の書面だけだとイメージを持ってもらえないため
  - トークしつつモックアップでこんな風に改善します、を見せる

---
layout: two-cols
---

# 成果物

Vercel v0 が作成したモックアップ

<a href="https://kzmqei9s7ri1wxxra0ds.lite.vusercontent.net/" target="_blank">こちら</a>で確認できます

::right::

<img src="/img/mockup-toppage.png" alt="Vercel v0 が生成したモックアップサイトのトップページ" />

---
layout: default
---

# v0 についてご紹介

- https://v0.dev/
- Vercel が開発している、React でのフロントエンド実装に特化した生成AIサービス
  - Vercel はReact フレームワークのNext.js などを開発している企業
- Next.js を使ったモックアップの生成が得意
- UIフレームワークの指定ができる
  - デフォルトでshadcn を利用するが、プロンプトで指定すれば別の利用できる
  - 今回はMUIを指定
- コードの出力、Figmaへのエクスポートも可能
- GUIで位置を指定しての修正指示ができる
  - 特定の入力欄をinput から textarea に変更するなど
- 無料で使える範囲がおおきい！
  - 今回のモックアップは無料プランの範囲内で作成できた

---
layout: image-right
image: https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

# プロンプト例

```
## アプリの概要：セミナーイベントの開催予定と予約の管理アプリケーション

## デザインUI：Material Design

## コンポーネントライブラリ：MUI 6

## レイアウトの画面サイズ：PCサイズ(横幅1366px)

## 必要となる画面

1. イベントカテゴリー一覧画面 
  - イベントカテゴリーを検索
  - 一覧表示できる.検索条件の項目は以下
    - 上位カテゴリー（セレクトボックス）
    - カテゴリー名称（インプットボックス）
    - 公開設定（チェックボックス）
    - 検索ボタンを押すと、指定した条件にマッチするイベントカテゴリーが表示される
...
```

---

# よかったこと

- 画面の構成や提案内容のベースが爆速でできた！
  - 記述量が多い画面構成案と提案内容のドラフトの時間削減
- モックアップがあったことで、先方の期待をコントロールできた！
  - 画面のイメージがわかりやすい
  - 仕様に対する理解のズレを防ぎ、具体的な希望が出てきた
- ほかの作業をする時間を削らなくてよかった！
  - 2月はほかにも納品があったので、そちらの時間も確保できた
  - 予定通りすべて納品できました🥳

---

# 触ってみてわかったv0の課題点

### 1. 良くも悪くもNext.js縛り

<p></p>

- 素のReactや、Next.js 以外のフレームワークは扱いづらい
  - プレビューが使えないなど
  - ![alt text](/img/mui-date-pickers-not-working.png)
  - MUI DatePicker, React Router が使えないことを確認した

---
theme: default
---

# 触ってみてわかったv0の課題点

### 2. 画面間のデータ保持はできなそう

<p></p>

- 登録画面でデータを入力したり、編集画面で変更した内容が引き継がれない
  - プロトタイプとして試しに使ってみるとかはできない


---
theme: default
---

# 触ってみてわかったv0の課題点

### 3. コードの出来としてはうーん…って感じで、リファクタリング必須

<p></p>

- コンポーネント分割とかはしない、1画面で1ファイル
- useState 祭りになる

```tsx
export default function NewEvent() {
  const router = useRouter()
  const [eventName, setEventName] = useState("")
  const [eventId, setEventId] = useState("")
  const [category, setCategory] = useState("")
  const [onlineMeetingHost, setOnlineMeetingHost] = useState("")
  const [availableOrganization, setAvailableOrganization] = useState("")
  const [allowProxyReservation, setAllowProxyReservation] = useState("false")
  const [proxyReservationLimit, setProxyReservationLimit] = useState("")
  const [isOnline, setIsOnline] = useState("false")
  const [onlineUrl, setOnlineUrl] = useState("")
  // ...
}
```

---

# まとめ

- 提案フェーズでも、ツールをうまく組み合わせれば生成AIの力を借りることができる
  - ツールの使い方のキャッチアップが大変…
- 今回はとくにv0 がすごかった
  - 個人開発など、まず動かしてみたいというケースではさらに力を発揮しそう
- 現在進行形でAIに仕事を奪われている、ともいえる笑
  - 利用できるものはどんどん取り入れていかないと…
  - 現状、ツールをサクッと使ってみて勘所を抑えるのがうまい人が強い
- v0 含め、production ready な品質ではない場合も多いので、実装力はやっぱり必要
  - AI 使わないと進捗出せない人と、使わなくてもやれる人ではできることの幅が変わるのは間違いない

---
layout: center
---

# おわり
