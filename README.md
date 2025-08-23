# GraphQL Demo

Next.js + TypeScript + GraphQL を使用したモダンなWebアプリケーションのデモプロジェクトです。

## 🚀 技術スタック

### フロントエンド
- **Next.js** 15.5.0 (App Router)
- **TypeScript** 5.x (strict mode)
- **React** 19.1.0
- **Vanilla Extract CSS** - CSS-in-JS スタイリング
- **Sprinkles** - Utility-first CSS フレームワーク

### GraphQL
- **URQL** 5.x - GraphQL クライアント
- **GraphQL Code Generator** - 型安全な GraphQL コード生成
- **GraphCache** - 高度なキャッシュ戦略

### 開発ツール
- **Storybook** 9.x - コンポーネント駆動開発
- **Vitest** 3.x - 高速テストランナー
- **Playwright** - E2Eテスト
- **ESLint** 9.x - コード品質チェック
- **Chromatic** - ビジュアルテスト

## 📁 プロジェクト構造

```
src/
├── app/              # Next.js App Router ページ
│   ├── actions.ts    # Server Actions
│   ├── layout.tsx    # ルートレイアウト
│   └── page.tsx      # ホームページ
├── components/ui/    # 再利用可能なUIコンポーネント
│   ├── Box.tsx       # レイアウトコンポーネント
│   └── Button.tsx    # ボタンコンポーネント
├── gql/             # GraphQL自動生成ファイル
├── lib/graphql/     # GraphQLクライアント設定
├── stories/         # Storybookストーリー
└── styles/          # Vanilla Extractスタイル定義
    ├── sprinkles.css.ts  # Utility クラス
    └── tokens.ts         # デザイントークン
```

## 🛠️ 開発環境セットアップ

### 前提条件
- Node.js 18.x 以上
- npm または yarn

### インストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認できます。

## 📝 利用可能なスクリプト

### 開発
- `npm run dev` - 開発サーバー起動 (localhost:3000)
- `npm run build` - プロダクションビルド
- `npm start` - プロダクションサーバー起動

### コード品質
- `npm run lint` - ESLint実行
- `npm run generate` - GraphQL型定義生成

### テスト・開発ツール
- `npm run storybook` - Storybook起動 (localhost:6006)
- `npm run build-storybook` - Storybookビルド
- `npm run chromatic` - Chromaticビジュアルテスト

## 🏗️ アーキテクチャの特徴

### コンポーネント設計
- **Box コンポーネント**: レイアウトシステムの基盤
- **TypeScript インターフェース**: 型安全なprops定義
- **Functional Component パターン**: React 19のベストプラクティス

### スタイリングシステム
- **Vanilla Extract**: ゼロランタイムCSS-in-JS
- **Sprinkles**: Tailwind風のユーティリティクラス
- **デザイントークン**: 一貫したデザインシステム

### GraphQL統合
- **URQL クライアント**: 軽量で高性能なGraphQLクライアント
- **コード生成**: 型安全なクエリとミューテーション
- **キャッシュ戦略**: Normalized cacheによる効率的なデータ管理

## 🧪 品質管理

### コード品質
- **ESLint**: Next.js推奨設定 + Storybook設定
- **TypeScript**: strict モード有効
- **パスエイリアス**: `@/*` → `./src/*`

### テスト戦略
- **Vitest**: 単体テスト・統合テスト
- **Storybook**: コンポーネントテスト
- **Playwright**: E2Eテスト

### 開発フロー
1. コンポーネント設計 (Storybook)
2. 型定義生成 (`npm run generate`)
3. 開発・実装
4. テスト実行
5. コード品質チェック (`npm run lint`)
6. ビルド確認 (`npm run build`)

## 🚀 デプロイ

### Vercel (推奨)
```bash
npm run build
```

Vercel Platform での簡単デプロイが可能です。

### その他のプラットフォーム
Next.js の静的エクスポートやサーバーサイドレンダリングに対応しています。

## 📚 学習リソース

- [Next.js Documentation](https://nextjs.org/docs)
- [URQL Documentation](https://formidable.com/open-source/urql/)
- [Vanilla Extract Documentation](https://vanilla-extract.style/)
- [Storybook Documentation](https://storybook.js.org/docs)

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。
