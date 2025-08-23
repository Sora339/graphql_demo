# コーディング規約とスタイル

## TypeScript
- strict モード有効
- パスエイリアス: @/* → ./src/*
- JSXは preserve モード

## コンポーネント設計
- React Functional Components
- TypeScript interface でprops定義
- デフォルトパラメータ使用

## スタイリング
- Vanilla Extract CSS
- Sprinkles utilityクラス
- Box コンポーネントでレイアウト

## ファイル構成
- tsx: Reactコンポーネント
- css.ts: Vanilla Extractスタイル
- stories.tsx: Storybookストーリー

## GraphQL
- コード生成: @graphql-codegen/client-preset
- クライアント: URQL
- スキーマファイル: schema.graphql