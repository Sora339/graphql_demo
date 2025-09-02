// GraphQL API のテスト用ファイル

const GRAPHQL_ENDPOINT = 'http://localhost:3000/api/graphql';

// サンプルデータを取得するテスト
export async function testGetSamples() {
  const query = `
    query GetSamples {
      samples {
        id
        title
        content
        createdAt
      }
    }
  `;

  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();
    console.log('GetSamples result:', result);
    return result;
  } catch (error) {
    console.error('Error fetching samples:', error);
    throw error;
  }
}

// 新しいサンプルを作成するテスト
export async function testCreateSample(title: string, content: string) {
  const query = `
    mutation CreateSample($input: CreateSampleInput!) {
      createSample(input: $input) {
        id
        title
        content
        createdAt
      }
    }
  `;

  const variables = {
    input: { title, content }
  };

  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    const result = await response.json();
    console.log('CreateSample result:', result);
    return result;
  } catch (error) {
    console.error('Error creating sample:', error);
    throw error;
  }
}

// ブラウザのコンソールで実行できるようにwindowオブジェクトに追加
if (typeof window !== 'undefined') {
  (window as any).testGetSamples = testGetSamples;
  (window as any).testCreateSample = testCreateSample;
}
