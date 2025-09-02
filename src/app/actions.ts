"use server";

import { revalidateTag } from 'next/cache';
import { getClient } from '@/lib/graphql/client';
import { SamplesQuery, CreateSampleMutation } from '@/lib/graphql/queries';

// 型定義
interface Sample {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

interface SampleData {
  samples: Sample[];
}

interface ApiResult<T = unknown> {
  data: T | null;
  errors: { message: string }[] | null;
}

// シリアライズ可能な結果に変換するヘルパー関数
function toApiResult<T>(result: { data?: T; error?: Error }): ApiResult<T> {
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

    // GraphQLミューテーションを実行
    const client = getClient();
    
    const result = await client.mutation(CreateSampleMutation, {
      input: { title, content }
    }).toPromise();

    if (result.error) {
      console.error('GraphQL mutation error:', result.error);
      return;
    }

    console.log('Sample created:', result.data);

    // 成功時はキャッシュを無効化
    revalidateTag('samples');

    // Server Actionsはvoidを返す必要があります
  } catch (error) {
    console.error('Server action error:', error);
  }
}

// データ取得のServer Action
export async function getSampleData(): Promise<ApiResult<SampleData>> {
  try {
    const client = getClient();
    
    // GraphQLクエリを実行
    const result = await client.query(SamplesQuery, {}).toPromise();

    if (result.error) {
      console.error('GraphQL error:', result.error);
      return toApiResult({ error: new Error(result.error.message) });
    }

    return toApiResult({ 
      data: { 
        samples: result.data?.samples || [] 
      } 
    });
  } catch (error) {
    console.error('Error fetching samples:', error);
    return toApiResult({ error: error as Error });
  }
}
