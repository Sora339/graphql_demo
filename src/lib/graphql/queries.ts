import { graphql } from '@/gql';

// サンプルクエリ - スキーマに対応
export const SamplesQuery = graphql(`
  query GetSamples {
    samples {
      id
      title
      content
      createdAt
    }
  }
`);

export const SampleQuery = graphql(`
  query GetSample($id: ID!) {
    sample(id: $id) {
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
