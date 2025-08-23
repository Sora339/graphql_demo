Next.js + GraphQL デモプロジェクト

## 技術スタック
- Next.js 15.5.0 (App Router)
- TypeScript 5.x
- React 19.1.0
- URQL (GraphQL client)
- Vanilla Extract CSS
- Vitest (テスト)
- Storybook (コンポーネント開発)

## 主要コマンド
- npm run dev - 開発サーバー起動
- npm run build - プロダクションビルド
- npm run lint - ESLint実行
- npm run generate - GraphQL コード生成
- npm run storybook - Storybook起動

## プロジェクト構造
- src/app/ - Next.js App Router ページ
- src/components/ui/ - 再利用可能UIコンポーネント
- src/gql/ - GraphQL自動生成ファイル
- src/lib/graphql/ - GraphQLクライアント設定
- src/stories/ - Storybookストーリー
- src/styles/ - Vanilla Extractスタイル定義