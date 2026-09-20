# Uki Uki Marche

水上マルシェを紹介するNext.jsの1ページサイトです。内容は提供された2026年9月27日の公式チラシに基づいています。

## 開発

Node.js 20.9以上とpnpmを使用します。

```sh
pnpm install
pnpm dev
```

http://localhost:3000 で確認できます。

## 確認・公開

```sh
pnpm typecheck
pnpm build
pnpm start
```

VercelでGitHubリポジトリを読み込む場合、フレームワークはNext.jsです。環境変数は不要です。

## 内容の変更

- 本文・開催情報：`app/page.tsx`
- 申し込み・時刻表・スクロール表示：`app/experience-guide.tsx`
- イラストの配置：`app/river-art.tsx`
- 色・レイアウト：`app/globals.css`
- タイトル・検索用説明：`app/layout.tsx`
- チラシ画像：`public/images/`

SUPレースはチラシ裏面のQRコードから確認したGoogleフォームの回答画面へリンクしています。
開催日後は次回の案内または終了案内へ更新してください。

イラストの出典と画像編集の記録は `ILLUSTRATION-NOTES.md` に記載しています。
端末で「視差効果を減らす」などの設定が有効な場合、登場アニメーションと流れる帯を停止します。
