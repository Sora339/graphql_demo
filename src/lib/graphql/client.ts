import { Client, cacheExchange, fetchExchange } from 'urql';

export const getClient = () => {
  return new Client({
    url: process.env.GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql',
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
      return {
        headers: {
          // 必要に応じてヘッダーを追加
        },
      };
    },
  });
};
