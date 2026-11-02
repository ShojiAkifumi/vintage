# Vintage — 赤坂のフランス料理レストラン

フランス料理レストラン「Vintage」の公式サイト（静的HTML / CSS / JavaScript）。

## ページ構成

| ファイル | ページ |
| --- | --- |
| `index.html` | TOP（メインビジュアル・おすすめメニュー・こだわり・ギャラリー・お知らせ） |
| `menu.html` | メニュー（ランチ・ディナーコース・アラカルト・ドリンク） |
| `shop.html` | 店舗案内（コンセプト・シェフあいさつ・外観・店舗情報・アクセス・ギャラリー・FAQ） |
| `news.html` | お知らせ |
| `reserve.html` | ご予約（電話・Webフォーム） |

```
assets/
  css/common.css   ヘッダー・フッター・ボタンなど全ページ共通
  css/<page>.css   各ページ固有のスタイル
  js/main.js       スマホメニュー、メインビジュアルのカルーセル、予約フォーム
  images/          画像
```

ビルド不要です。`index.html` をブラウザで開くか、任意の静的ホスティング（GitHub Pages など）に配置してください。

## 公開前に差し替えが必要な箇所

- 電話番号 `03-xxxx-xxxx`（`tel:` リンクを含む全ページ）
- 住所 `東京都港区赤坂x-xx-xx xxxxxx`、Googleマップのリンク・埋め込み（`shop.html` の iframe ほか）
- 予約フォームの送信先（`reserve.html` / `assets/js/main.js` の TODO。現在は送信せず確認表示のみ）
- お知らせの日付・本文、年末年始の `[休業期間]` などのプレースホルダー
