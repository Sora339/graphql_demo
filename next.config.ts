import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin({
  // SSRとビルド時の問題を解決するためのオプション
  identifiers: 'debug', // 開発時にクラス名を分かりやすくする
});

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Vanilla Extractの最適化を有効にする
    optimizePackageImports: ['@vanilla-extract/css'],
  },
  // webpack設定の追加
  webpack: (config, { isServer }) => {
    // サーバーサイドでのVanilla Extract処理を改善
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default withVanillaExtract(nextConfig);
