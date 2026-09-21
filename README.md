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

## 検索・セキュリティ設定
- 正規URL・検索説明・SNS共有画像：app/layout.tsx
- イベント構造化データ：app/event-data.tsx（開催日・場所を変更したら本文と一緒に更新）
- robots.txt・sitemap.xml：app/robots.ts、app/sitemap.ts
- 保護ヘッダー：next.config.ts（CSPは埋め込み等への限定的な保護で、厳格なscript-src制限ではありません）
- Dependabotが週1回更新PRを提案します。自動マージはしません。
- Google Search Consoleへの所有権確認・サイトマップ送信は別途必要です。検索掲載や順位は保証されません。
- 2026-09-21：pnpm auditで既知の脆弱性0件。定期的な再確認を推奨します。

