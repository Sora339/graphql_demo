import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './schema.graphql', // ローカルスキーマファイルを使用
  documents: ['src/**/*.{ts,tsx}', 'src/**/*.graphql'],
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'graphql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
