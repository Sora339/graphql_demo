import { Client, cacheExchange, fetchExchange } from 'urql';

export const getClient = () => {
  return new Client({
    url: process.env.GRAPHQL_ENDPOINT || 'http://localhost:3000/api/graphql',
    exchanges: [cacheExchange, fetchExchange],
    preferGetMethod: false, // POSTメソッドを強制
    fetchOptions: () => {
      return {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 必要に応じてヘッダーを追加
        },
      };
    },
  });
};
