"use server";

import { revalidateTag } from 'next/cache';

// シリアライズ可能な結果に変換するヘルパー関数
function toApiResult<T>(result: { data?: T; error?: Error }) {
  if (result.error) {
    return {
      data: null,
      errors: [{ message: result.error.message }],
    };
  }
  
  return {
    data: result.data || null,
    errors: null,
  };
}

// サンプルのServer Action
export async function createSampleAction(formData: FormData) {
  try {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    // GraphQLミューテーションを実行（実際のミューテーションに置き換えてください）
    // const client = getClient();
    
    // 実際のミューテーションの例：
    // const result = await client.mutation(CreateSampleMutation, {
    //   input: { title, content }
    // });

    // サンプルのレスポンス
    console.log('Form submitted:', { title, content });

    // 成功時はキャッシュを無効化
    revalidateTag('samples');

    // Server Actionsはvoidを返す必要があります
  } catch (error) {
    console.error('Server action error:', error);
  }
}

// データ取得のServer Action
export async function getSampleData() {
  try {
    // const client = getClient();
    
    // 実際のクエリの例：
    // const result = await client.query(SampleQuery, {});

    // サンプルのレスポンス
    const result = {
      data: {
        samples: [
          { id: '1', title: 'Sample 1', content: 'Content 1' },
          { id: '2', title: 'Sample 2', content: 'Content 2' },
        ]
      }
    };

    return toApiResult(result);
  } catch (error) {
    return toApiResult({ error: error as Error });
  }
}
