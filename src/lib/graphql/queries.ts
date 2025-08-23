import { graphql } from '@/gql';

// サンプルクエリ - スキーマに対応
export const SampleDataQuery = graphql(`
  query SampleData {
    sampleData {
      id
      title
      content
      createdAt
    }
  }
`);

// ユーザークエリ
export const UsersQuery = graphql(`
  query GetUsers {
    users {
      id
      name
      email
      createdAt
    }
  }
`);

// サンプルミューテーション
export const CreateSampleMutation = graphql(`
  mutation CreateSample($input: CreateSampleInput!) {
    createSample(input: $input) {
      id
      title
      content
      createdAt
    }
  }
`);
