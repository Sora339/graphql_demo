# タスク完了時の実行項目

## コード品質チェック
1. `npm run lint` - ESLint実行
2. TypeScriptエラーチェック
3. `npm run build` - ビルドエラーチェック

## GraphQL関連
- `npm run generate` - GraphQL型定義の再生成（schema変更時）

## テスト実行
- Vitest テスト実行（設定済み）
- Storybook コンポーネントテスト

## コミット前
1. ESLintエラー解決
2. TypeScriptエラー解決  
3. ビルド成功確認
4. GraphQL型定義最新化

## デプロイ前
1. `npm run build` 成功確認
2. Storybook ビルド確認