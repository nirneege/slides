---
# You can also start simply with 'default'
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# some information about your slides (markdown enabled)
title: ITコミュニティと連動したコワーキングスペース事業
author: nirneege system
titleTemplate: "%s"
info: |
  ## ITコミュニティと連動したコワーキングスペース事業

  nirneege system

fonts:
  sans: Noto Sans JP
  serif: Noto Serif JP
  mono: Noto Sans Mono

addons:
- "@katzumi/slidev-addon-qrcode"

# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
colorSchema: light
---

<div id="cover-bg">
  <ParticleBg />
</div>

<h1>
ITコミュニティと連動した<br>
コワーキングスペース事業
</h1>

<p class="text-black-800">学びの循環を重視するIT学習スタイルの提案</p>

<div class="absolute bottom-0 left-0 p-4 text-left flex flex-row gap-2">
  <div class="bg-white">
      <qrcode-vue
        value="https://x.gd/Q7sO3"
        level="M"
        size="100"
        margin="1"
        background="#ffffff"
        foreground='#111111'
      />
  </div>
  <div class="flex flex-col items-start">
    <p class="text-gray-500 text-sm m-0!">URL/QRコードから本資料を閲覧できます</p>
    <a href="https://x.gd/Q7sO3" target="_blank">https://x.gd/Q7sO3</a>
  </div>
</div>

<div class="absolute bottom-0 right-0 p-5 text-right">
  <div class="flex flex-col items-end">
    <p class="text-gray-600">nirneege system 小口雄大</p>
    <img src="/img/nirneege_logo.png" class="w-42" alt="QR Code">
  </div>
</div>

<style>
  #cover-bg {
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -10;
  }
</style>

<script setup>
import { onSlideEnter, onSlideLeave, useIsSlideActive } from '@slidev/client'
import QrcodeVue from 'qrcode.vue'

onSlideEnter(() => {
  const setParticulerBg = () => {
    console.log('set particuler bg');
    const elm = document.getElementById('cover-bg');
    if (elm) {
      if (elm.innerHTML) {
        return;
      }
      particleground(elm, {
        density: 10000,
        dotColor: '#aaaaaa',
        lineColor: '#cccccc',
        density: 10000,
        proximity: 100,
        particleRadius: 4,
        curvedLines: false,
        proximity: 100,
        parallax: false,
      });
    } else {
      setTimeout(setParticulerBg, 500);
    }
  }
  setParticulerBg();
})

</script>

<!--
- 本資料は、ITコミュニティと連動したコワーキングスペース事業の提案を行います
- コワーキングスペースとコミュニティはそれぞれは珍しくないものですが、この2つを組み合わせた新しいスタイルについておはなしします。
-->

---
transition: fade-out
---

<h1>発表者紹介</h1>

<div class="grid grid-cols-2 gap-4 h-full">
  <div>
    <ul>
    <li>小口雄大</li>
    <li>ソフトウェアエンジニア</li>
    <li>2021 年にnirneege システムの屋号で独立</li>
    <li>設計から実装・保守対応までワンストップで対応</li>
    <li>プログラミング研修講師、教材開発</li>
    <li>プログラミング学習者向け個別メンタリング</li>
    <li><a href="https://www.resume.id/y_uchiida">https://www.resume.id/y_uchiida</a></li>
    <li>
      <qrcode-vue
        value="https://www.resume.id/y_uchiida"
        level="M"
        size="160"
        margin="4"
        background="#ffffff"
        foreground='#111111'
      />
    </li>
    </ul>
  </div>
  <div class="relative">
    <div class="absolute bottom-8 right-0 m-8">
      <img src="/img/portrait.jpg" class="bg-black-800 w-42 h-42 b-1 object-cover rounded-full" alt="Portrait">
    </div>
  </div>
</div>

<script setup>
  import QrcodeVue from 'qrcode.vue'
</script>

<!-- 
ごく簡単に、自己紹介をします。
2021年から、自身もIT産業の従事者としてお仕事をしています。
ソフトウェアの設計開発のほか、後進育成のために研修講師としても活動しています。
-->

---

# 社会の課題と動向

<div class="flex flex-row gap-4">

  <div class="flex-1">

  <ul>
    <li class="py-4">IT 人材不足の深刻化
      <ul>
        <li>デジタル化の加速による人材需要増</li>
        <li>2030 年に最大 79 万人不足</li>
      </ul>
    </li>
  </ul>

  <a href="/img/shotage_of_engineer.png" target="_blank">
    <img id="zooming" src="/img/shotage_of_engineer.png" class="w-max" alt="IT人材不足のグラフ">
  </a>
  </div>
  <div class="flex-1">

  <ul>
    <li class="py-4">リモートワーク時代の変化
      <ul>
        <li>働く場所の多様化</li>
        <li>オフライン交流の重要性</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li class="py-4">IT 学習者の課題
      <ul>
        <li>忙しい日々の中、モチベーションを保てない</li>
        <li>変化が早く、単独でキャッチアップし続けられない</li>
      </ul>
    </li>
  </ul>

  </div>

</div>

<div class="absolute bottom-0 right-0 p-4 text-right">
  <p class="text-xs text-gray-600">出典: 経済産業省「IT人材の最新動向と将来推計に関する調査結果」</p>
</div>

<!--
まず、本事業を提案する背景についてお話します。
IT人材不足は深刻で、2016年の経済産業省の調査によると、2030年には最大で79万人の不足が予測されています。
先般の感染症対策の影響でリモートワークが普及しましたが、コミュニケーションの課題が浮き彫りになりました。
楽観できない状況に加えて、ITに関する学習の難しさも課題となっています。
-->

---

# 本事業による課題解決

以下のサービスを複合的に提供し、持続可能な IT 人材育成の仕組みを実現

<div class="grid grid-cols-3 mt-6">
  <div class="flex flex-col items-center">
    <div class="text-6xl mb-6">🔄</div>
    <h3 class="text-xl font-bold mb-2">学びの循環を促す<br>コミュニティ</h3>
    <ul class="community">
      <li>経験者と初学者の交流</li>
      <li>技術勉強会の定期開催</li>
      <li>ナレッジ共有の仕組み</li>
    </ul>
  </div>

  <div class="flex flex-col items-center">
    <div class="text-6xl mb-6">📚</div>
    <h3 class="text-xl font-bold mb-2">未経験者・初学者を<br>支援するトレーニング</h3>
    <ul class="training">
      <li>段階的な学習カリキュラム</li>
      <li>実務経験者によるメンタリング</li>
      <li>チーム開発体験の機会</li>
    </ul>
  </div>

  <div class="flex flex-col items-center">
    <div class="text-6xl mb-6">🏢</div>
    <h3 class="text-xl font-bold mb-2">目的に合わせて活用できる<br>コワーキングスペース</h3>
    <ul class="coworking">
      <li>交流ゾーン/集中ゾーン</li>
      <li>モニター等備品の貸出</li>
      <li>高速Wi-Fi環境</li>
    </ul>
  </div>
</div>

<style>
  ul li {
    list-style-position: inside;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  ul.community li::before {
    content: '🔄';
    margin-right: 0.5rem;
  }
  ul.training li::before {
    content: '📚';
    margin-right: 0.5rem;
  }
  ul.coworking li::before {
    content: '🏢';
    margin-right: 0.5rem;
  }
</style>

<!--
これら背景課題を踏まえて、本事業は以下の3つのサービスを複合的に提供します。
ITコミュニティを通じた学びの循環、未経験者・初学者向けのトレーニング、コワーキングスペースの3つです。
-->

---

<div class="flex flex-col gap-4">

  <div>
    <h1>
    本事業を通じて目指す社会
    </h1>
  </div>
  <div class="text-2xl">
    テクノロジーの力で、誰もが自分らしく働ける社会を創る
  </div>

- 地域に根差したIT 人材プラットフォームとして、地域経済の活性化に貢献
- 高度化する情報化社会に対応できる人材の育成
- 地方都市における新たな働き方のロールモデル確立
- 多様な人材の IT 業界参入促進
- SIer 依存からの脱却、ユーザー企業の IT 技術力向上

</div>

<!-- 
本事業が広がりによって、テクノロジーの力で、誰もが自分らしく働ける社会を創ることを目指します。
学びの循環と交流によってIT産業の担い手のすそ野を広げ、地域経済の活性化に貢献します。
また、IT業界で課題とされているSIer依存の解決にもつながります。
-->

---
layout: image-right
image: /img/learning_image.jpg
transition: slide-up
level: 1
---

# 本事業の提供価値 - 1

<div class="text-xl">
<p>コミュニティを通じた学びの循環</p>
</div>
<div v-click-hide>

- Peer Learning
  - メンバーが相互に教え、学びあう
  - 教える側の理解を深める

- コミュニティからの学習テーマ提供
  - メンバー主体の勉強会の開催
  - 技術トレンドのキャッチアップ

- 知見の共有と蓄積
  - コミュニティ主催イベント
  - イベント開催レポート

</div>

<v-after>

<div class="m-0">
コミュニティでの活動内容案
</div>

- もくもく会
- 資格取得にむけた勉強会
- 技術書輪読会
- プロジェクトチーム活動
- LT会
- シビックテックの取り組み

これらのイベントを有機的に関連させ、<br />
実践的な学びの機会を提供する

</v-after>

<style>
  .slidev-vclick-hidden {
    display: none;
  }
</style>

<!-- 
特徴のひとつ目、コミュニティを通じた学びの循環についてお話します。
コミュニティにおいては、Peer Learning の仕組みを導入します。
Peer Learningとは、メンバーが相互に教え、学びあうことで、教える側の理解を深める学習スタイルです。
私は現在、エンジニア研修や個人向けプログラミング学習のメンターとして活動しています。
その経験を通じて「教えることによって得られる学びの価値」を実感してきました。
人に教えることで、教える側は学ぶ側の何倍もの気づきや学びを得ることができるのです。

IT 業界は変化のスピードが非常に速く、この分野にかかわる人は、職種にかかわらず継続的な学習が求められます。
しかし、業務や学業、日々の生活に追われる中で、個人での最新情報のキャッチアップや学習モチベーションの維持は容易ではありません。
本事業プランでは、コミュニティを通じた学びの共有の意義を重視します。
IT 関連の様々な内容を気軽に学び、ほかのメンバーに共有することで自身の理解を深めます。

独力では習得しづらい分野も、コミュニティ内で協力することで、学びのハードルを下げることができます。
また、コミュニティ内での活動が続いていくことで知見が蓄積され、キャッチアップが容易になります。
-->

---
layout: image-right
image: /img/beginner_curriculum.jpg
transition: slide-up
level: 2
---

# 本事業の提供価値 - 2

<div class="text-xl">
<p>初学者のための入門カリキュラム</p>
</div>

- アウトプット重視の学習
  - 体験を通じた概念把握
  - 試行錯誤の楽しさ・面白さ

- コミュニティを通じた応用・発展
  - チーム開発体験の機会
  - ロールモデルの具体化

- 実務に即したスキルアップ
  - 地域企業のニーズに沿ったカリキュラム
  - 各種ツールチェインの習得

<!-- 
続いて、初学者向けの入門カリキュラムについてお話します。

Peer Learning は効果的な学習方法で、広く採用されていますが、前提知識のない初学者にとっては参加しづらいことも事実です。
未経験者もこのサイクルに参加しやすいよう、ガイドラインとして実践的なカリキュラムを含んだ教材を用意します。

アウトプット中心のカリキュラムを作成し、体験を通じて概念を把握することを重視します。
また、何かを創ることの根源的な楽しさである「試行錯誤の面白さ」は、初学者の成長実感には欠かせません。

アウトプットをすることに慣れたら、コミュニティ内での活動に関与できるようにサポートします。
チーム開発体験のイベントへの参加や、ロールモデルとなるメンバーとの交流を通じて、次のスキルアップの機会を提供します。

また、基本習得にとどまらず、希望者がIT関連産業で活躍するための支援も行います。
地域企業のニーズに沿ったカリキュラムを提供し、実務に即したスキルアップを目指します。
また、実務で利用されている周辺ツールについても、カリキュラムを提供します。
-->

---
layout: image-right
image: /img/coworking_space.jpg
level: 3
---

# 本事業の提供価値 - 3

<div class="text-xl">
<p>使いやすいコワーキングスペース</p>
</div>

- スペースの工夫
  - 気軽に立ち寄れる立地
  - 交流ゾーン/集中ゾーン
  - 柔軟な利用プラン

- IT 関連に特化した設備
  - モニター等の配置、貸出
  - 技術書籍の貸出
  - 高速 Wi-Fi 環境

<!-- 
最後に、コワーキングスペースについてお話します。

オフラインでの交流の重要性が再認識された昨今、コワーキングスペースの需要が高まっています。
本事業では、IT関連の学習や交流に特化したコワーキングスペースを提供します。
松戸周辺に在住している方にとって立ち寄りやすい場所を選定します。
また、コミュニティ活動にも参加しやすいよう、交流ゾーンと集中ゾーンを設けます。
ドロップインや月額契約など、柔軟な利用プランを用意します。

コミュニティとコワーキングスペースを融合させることで、オンライン・オフラインの垣根を越えた学びの
場を創出し、IT 業界における新しい学習モデルを確立していきたいと考えています。
この取り組みを通じて、持続可能な IT 人材育成の仕組みを構築することを目指します。
-->

---

# ターゲット

<div class="text-sm">
松戸市周辺の以下の属性の方が主な顧客層
</div>

<div class="text-[12px]">

| ターゲットの属性・職種                 | ニーズ                                                           |
| ------------------------------------ | ---------------------------------------------------------------- |
| プログラマー                          | 新しい技術に触れたいが、何を学べばよいか選定できない                  |
| システムエンジニア                     | 仕様設計やシステムアーキテクチャについて、ざっくばらんに意見交換したい |
| Web デザイナー                        | デザインスキルを磨くための機会が欲しい                              |
| Web ディレクター                      | 幅広く IT 関連の知識を得たい                                       |
| SEO コンサルタント                    | 効果的な広告アルゴリズムについて、実装ができる人の話を聞いてみたい     |
| インフラエンジニア                    | 社外のインフラ環境について興味がある                                 |
| その他 IT 関連職種の人                | 幅広く IT 関連の知識を得たい                                        |
| 大学生                               | 専攻分野のほかに、将来の職業スキルに役立つ学習をしたい                 |
| IT 関連分野で就職・活動中の人          | IT 業界に関する情報を集めたい                                       |

</div>

<!-- 
想定されるターゲットは以下の通りです。
IT関連産業に従事している方に加えて、大学生や就職・転職を検討している方などにとっても、交流と学びの場はニーズがあると考えています。
-->


---

# マーケティングと成長戦略

<div v-click-hide>

- 以下の市場機会をとらえることを基本方針とする
  - IT 関連の学習やキャッチアップの難しさ
  - リモートワークの普及によるコワーキングスペース需要の増加
  - IT 人材不足という社会課題

- 本事業の強み
  - IT に特化した専門性の高いサービス構成
  - 松戸市内での独自のポジション
  - 学びの循環を重視するコミュニティ運営

- 競合との差別化ポイント
  - Peer learning を採用した運営スタイル
  - 未経験者向けのカリキュラム提供
  - 地域企業へのヒアリングによる学習テーマの設定

</div>

<v-after>

- プロモーション活動
  - オンラインとオフラインの両面から展開
  - SNS を活用した情報発信
  - MEO 対策による 集客強化
  - テックブログの運営
  - コミュニティメンバーの学習記録や成功事例の発信

- 顧客獲得のための施策
  - コミュニティメンバーの口コミによる拡大
  - イベント開催やセミナーのゲスト参加
  - シビックテックや地域イベントへの参加

</v-after>

<style>
  .slidev-vclick-hidden {
    display: none;
  }
</style>

<!-- 
次に、マーケティングと成長戦略についてお話します。

すでにお話しした通り、本事業プランはIT 学習やキャッチアップの難しさという社会課題を主要な市場機会として捉えます。
また、リモートワークの普及によるコワーキングスペース需要の増加も、本事業の成長に寄与すると考えています。

本事業の強みは、ITに特化した専門性の高いサービス構成です。
Peer learning を採用した運営スタイルは、大きな差別化ポイントとなります。

その他の競合としては、オンラインコミュニティやコワーキングスペース、プログラミングスクールなどがあげられます。
Peer Learning の採用、未経験者向けのカリキュラム提供、加えて地域企業へのヒアリングに基づく学習テーマの設定など、実務志向の機会提供が差別化ポイントです。

プロモーション活動としては、主にWebを活用した広報に取り組みます。
また、オープンイベントの開催やイベントレポートの公開、メンバーの口コミなどを通じてブランディングを行います。

-->

---

<div class="flex flex-col h-full gap-2">
  <div>
    <h1 class="mb-0">
      収支計画
    </h1>
  </div>

  <div class="text-md">
    コワーキングスペースの月額会員50名、コミュニティ会員数100名を達成し、約1600万の年間利益を目指す
  </div>

  <div class="flex-1 h-0 max-h-full">
    <ProfitPlanningSammaryGraph />
  </div>

  <div class="flex-0 text-gray-500 text-xs ">
    <p class="py-1! px-2 m-0!">
      ※ 単位: 千円
    </p>
    <p class="py-1! px-2 m-0!">
      ※ 安定売上は月額会員契約などのサブスクリプション利用の売上、流動売上はドロップイン利用料などの単発サービス利用の売上の集計
    </p>
  </div>

</div>

<!-- 

最後に、収支計画についてお話します。
3年後には、月額会員50名、コミュニティ会員数100名を達成し、年間1600万円の利益を目指します。
コミュニティ会員費やコワーキングスペースの月額契約を安定売上として積上げていき、持続可能性を高めます。
また、ドロップイン利用やカリキュラム教材の販売など、単発の売上を流動売上として、柔軟な収益構造を目指します。

-->

---

# まとめ

<div class="grid grid-cols-2 gap-8">
  <div class="space-y-4">

  ## 本事業の特徴

  - 学びの循環を重視した新しい IT 学習モデル
    - コミュニティを通じた相互成長
    - 実践的なトレーニングプログラム
    - 柔軟な学習環境の提供

  - 地域に根差したIT 人材育成プラットフォーム
    - 多様なIT 人材との交流
    - 地域企業との連携
    - 安定売上による持続可能性

  </div>

  <div class="space-y-4">

  ## 今後の展望

  - 3年後の具体的目標
    - 月額会員 50名以上
    - コミュニティ会員 100名以上
    - 年間売上 1600 万円以上

  - 成長戦略
    - コミュニティ活動の拡大
    - 提供カリキュラム、開催イベントの充実
    - コワーキングスペースの増床、新拠点の開設

  </div>
</div>

<div class="w-full">
<div class="text-center bg-blue-50 dark:bg-blue-900 mx-auto max-w-4xl rounded-lg p-2 mt-4">
IT学習の難しさやIT人材不足という社会課題に対し、<br>地域に根差した持続可能な解決モデルを提供します
</div>
</div>

<!-- 
まとめです。

本事業は、ITコミュニティとコワーキングスペースを融合させた新しいIT学習モデルを提供します。
コミュニティにおいては学びの循環を重視し、Peer Learning の考え方を取り入れて運営します。
コワーキングスペースはIT関連向けに特化したスペースづくりを行います。

3年後には、月額会員50名以上、コミュニティ会員100名以上、年間売上1600万円以上を目指します。
コミュニティ活動の拡大、提供カリキュラムや開催イベントの充実、コワーキングスペースの増床や新拠点の開設など、成長戦略を展開していきます。
-->

---
layout: center
---

# 追補資料

---

# コワーキングスペースの想定座席数

| タイプ・ブースタイプ | 席数 | 備考 |
| ------------------- | ---- | ---- |
| テーブル席          | 10   | 長テーブルを共有する座席タイプ。会話 OK |
| デスク席            | 10   | デスク 1 台に 1 つの座席。会話 OK 会話 NG |
| サイレント席        | 20   | 仕切りつきデスク 1 台に 1 つの座席。会話 NG |
| 個室ブース          | 5    | 1 人で利用できる個室 |
| 会議室ブース        | 2    | 10 人まで入れる会議室 |

---

# コワーキングスペースの料金プラン案

<div class="text-sm">

| 座席タイプ・ブースタイプ名称 | 料金           | 備考                         |
| ----------------------------- | -------------- | ---------------------------- |
| ドロップイン利用              | 400 円/時      |                              |
| ドロップイン利用(学割)        | 300 円/時      |                              |
| ワンデー利用                  | 2,000 円/日    |                              |
| ワンデー利用(学割)            | 1,500 円/日    |                              |
| 月額利用                      | 19,800 円/月   |                              |
| 月額利用(学割)                | 14,800 円/月   |                              |
| 個室ブース利用料              | 300 円/時      | 通常利用料に追加             |
| 会議室利用料                  | 1,500 円/時    | 通常利用料不要、人数は関係なし |

</div>

---

# IT コミュニティの料金プラン案

| プラン名称                | 料金       | 備考                                                                 |
| ------------------------- | ---------- | -------------------------------------------------------------------- |
| コミュニティメンバー       | 1,000 円/月 | クローズドイベント含め、すべてのイベントに参加できる。<br>オープンイベントに優先参加できる |
| コミュニティメンバー(学割) | 700 円/月   |                                                                      |

---

# 初学者向けカリキュラムの料金プラン案

<div class="text-sm">

| プラン名称                        | 料金           | 備考                                                                 |
| --------------------------------- | -------------- | -------------------------------------------------------------------- |
| カリキュラム個別購入              | 5,000 円       | カリキュラムごとに異なる料金を設定する予定。基準額として 5,000 円を想定 |
| カリキュラム個別購入(学割)        | 3,500 円       |                                                                      |
| カリキュラム月額利用              | 15,000 円/月   | すべてのトレーニングカリキュラムを利用できる                           |
| カリキュラム月額利用(学割)        | 10,000 円/月   |                                                                      |
| 学習支援メンタリング(1 回)        | 4,000 円/1 回  |                                                                      |
| 学習支援メンタリング(セット)      | 35,000 円      | 3 か月間、10 回セット。                                               |

</div>


---
layout: default
---

# 損益の見通し

<div class="mt-4">

  <p class="py-1! px-2 m-0! text-xs text-gray-600">
    ※ 単位: 千円
  </p>

<div class="overflow-x-auto">
<table class="w-full text-sm">
  <thead class="bg-gray-100">
    <tr>
      <th class="py-1! px-2 text-left">項目</th>
      <th class="py-1! px-2 text-right">1年目</th>
      <th class="py-1! px-2 text-right">2年目</th>
      <th class="py-1! px-2 text-right">3年目</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b">
      <td class="py-1! px-2 font-medium">売上高</td>
      <td class="py-1! px-2 text-right">19,014</td>
      <td class="py-1! px-2 text-right">30,422</td>
      <td class="py-1! px-2 text-right">38,028</td>
    </tr>
    <tr class="border-b">
      <td class="py-1! px-2 font-medium">売上原価</td>
      <td class="py-1! px-2 text-right">0</td>
      <td class="py-1! px-2 text-right">0</td>
      <td class="py-1! px-2 text-right">0</td>
    </tr>
    <tr class="border-b bg-gray-100">
      <td class="py-1! px-2 font-medium">売上総利益</td>
      <td class="py-1! px-2 text-right">19,014</td>
      <td class="py-1! px-2 text-right">30,422</td>
      <td class="py-1! px-2 text-right">38,028</td>
    </tr>
    <tr class="border-b">
      <td class="py-1! px-2 pl-4">人件費</td>
      <td class="py-1! px-2 text-right">4,320</td>
      <td class="py-1! px-2 text-right">10,800</td>
      <td class="py-1! px-2 text-right">12,960</td>
    </tr>
    <tr class="border-b">
      <td class="py-1! px-2 pl-4">地代・家賃</td>
      <td class="py-1! px-2 text-right">6,600</td>
      <td class="py-1! px-2 text-right">6,600</td>
      <td class="py-1! px-2 text-right">6,600</td>
    </tr>
    <tr class="border-b">
      <td class="py-1! px-2 pl-4">広告宣伝費</td>
      <td class="py-1! px-2 text-right">200</td>
      <td class="py-1! px-2 text-right">200</td>
      <td class="py-1! px-2 text-right">200</td>
    </tr>
    <tr class="border-b">
      <td class="py-1! px-2 pl-4">その他経費</td>
      <td class="py-1! px-2 text-right">1,385</td>
      <td class="py-1! px-2 text-right">1,385</td>
      <td class="py-1! px-2 text-right">1,385</td>
    </tr>
    <tr class="border-b bg-gray-100">
      <td class="py-1! px-2 font-medium">営業利益</td>
      <td class="py-1! px-2 text-right">6,509</td>
      <td class="py-1! px-2 text-right">11,437</td>
      <td class="py-1! px-2 text-right">16,883</td>
    </tr>
    <tr class="border-b">
      <td class="py-1! px-2 font-medium">営業外費用（利息）</td>
      <td class="py-1! px-2 text-right">210</td>
      <td class="py-1! px-2 text-right">178</td>
      <td class="py-1! px-2 text-right">145</td>
    </tr>
    <tr class="bg-blue-50">
      <td class="py-1! px-2 font-medium">経常利益</td>
      <td class="py-1! px-2 text-right">6,299</td>
      <td class="py-1! px-2 text-right">11,259</td>
      <td class="py-1! px-2 text-right">16,738</td>
    </tr>
  </tbody>
</table>
</div>

<div class="mt-4 text-sm text-gray-600">

- 3年後の売上目標を100%として、1年後を50%、2年後を80%に設定
- 材料費等の売上原価は発生せず、販管費が主な費用
- 人件費は従業員の時給1,500円、1日8時間、月30日で算出

</div>

</div>
