import { NextRequest, NextResponse } from 'next/server';

// モックデータ
const mockSamples = [
  { 
    id: '1', 
    title: 'Sample 1', 
    content: 'Content 1',
    createdAt: new Date().toISOString()
  },
  { 
    id: '2', 
    title: 'Sample 2', 
    content: 'Content 2',
    createdAt: new Date().toISOString()
  },
  { 
    id: '3', 
    title: 'Sample 3', 
    content: 'Content 3',
    createdAt: new Date().toISOString()
  },
];

// 簡単なGraphQLリゾルバー
function resolveQuery(query: string, variables: any = {}) {
  if (query.includes('GetSamples')) {
    return {
      data: {
        samples: mockSamples
      }
    };
  }
  
  if (query.includes('GetSample')) {
    const id = variables.id;
    const sample = mockSamples.find(s => s.id === id);
    return {
      data: {
        sample: sample || null
      }
    };
  }
  
  if (query.includes('CreateSample')) {
    const { title, content } = variables.input;
    const newSample = {
      id: String(mockSamples.length + 1),
      title,
      content,
      createdAt: new Date().toISOString()
    };
    mockSamples.push(newSample);
    return {
      data: {
        createSample: newSample
      }
    };
  }
  
  return {
    errors: [{ message: 'Query not supported' }]
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, variables } = body;
    
    const result = resolveQuery(query, variables);
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('GraphQL Error:', error);
    return NextResponse.json({
      errors: [{ message: 'Internal server error' }]
    }, { status: 500 });
  }
}

export async function GET() {
  // GraphQL Playgroundのような簡単なレスポンス
  return new Response(`
    <html>
      <body>
        <h1>GraphQL Mock Server</h1>
        <p>POST to this endpoint with GraphQL queries</p>
        <p>Available queries: GetSamples, GetSample(id), CreateSample(input)</p>
      </body>
    </html>
  `, {
    headers: { 'Content-Type': 'text/html' },
  });
}
