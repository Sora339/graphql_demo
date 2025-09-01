import { Box } from '@/components/ui/Box';
import { Button } from '@/components/ui/Button';
import { getSampleData, createSampleAction } from './actions';
import {
  pageContainer,
  contentCard,
  section
} from './page.css';

// 型定義
interface Sample {
  id: string;
  title: string;
  content: string;
}

interface SampleData {
  samples: Sample[];
}

interface ApiResult {
  data: SampleData | null;
  errors: { message: string }[] | null;
}

export default async function Home() {
  // Server ComponentsでGraphQLデータを取得（デモ用）
  const sampleData = await getSampleData() as ApiResult;
  console.log(sampleData.data)

  return (
    <Box
      className={pageContainer}
      p={6}
    >
      <Box
        className={contentCard}
      >
        <Box as="header" mb={8} textAlign="center">
          <Box
            as="h1"
            fontSize="3xl"
            color="gray-800"
            mb={2}
          >
            ジャンプTOON スタック デモ
          </Box>
          <Box
            as="p"
            fontSize="lg"
            color="gray-600"
          >
            Next.js + GraphQL + vanilla-extract + Storybook + Chromatic
          </Box>
        </Box>

        {/* 技術スタック紹介 */}
        <Box className={section}>
          <Box as="h2" fontSize="xl" color="gray-800" mb={4}>
            🛠️ 採用技術
          </Box>
          <Box as="ul" color="gray-700">
            <Box as="li" mb={2}>
              <Box as="strong">Next.js 15</Box> - React Server Components & App Router
            </Box>
            <Box as="li" mb={2}>
              <Box as="strong">GraphQL + urql</Box> - サーバー間通信
            </Box>
            <Box as="li" mb={2}>
              <Box as="strong">vanilla-extract + Sprinkles</Box> - 型安全なCSS-in-JS
            </Box>
            <Box as="li" mb={2}>
              <Box as="strong">Storybook</Box> - コンポーネント開発・テスト
            </Box>
            <Box as="li" mb={2}>
              <Box as="strong">Chromatic</Box> - ビジュアルリグレッションテスト
            </Box>
            <Box as="li" mb={2}>
              <Box as="strong">Fastly</Box> - CDN & キャッシュ戦略
            </Box>
          </Box>
        </Box>

        {/* vanilla-extract デモ */}
        <Box className={section}>
          <Box as="h2" fontSize="xl" color="gray-800" mb={4}>
            🎨 vanilla-extract + Sprinkles デモ
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            mb={4}
          >
            <Button variant="primary" size="sm">
              Primary Small
            </Button>
            <Button variant="secondary" size="md">
              Secondary Medium
            </Button>
            <Button variant="primary" size="lg">
              Primary Large
            </Button>
          </Box>
          
          <Box
            p={4}
            backgroundColor="blue-50"
            borderRadius="md"
            mb={4}
          >
            <Box color="blue-800" fontSize="sm">
              このボックスはSprinklesのStyle Propsを使用して作成されています
            </Box>
          </Box>

          <Box
            display="grid"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}
          >
            <Box
              p={3}
              backgroundColor="blue-100"
              borderRadius="base"
              textAlign="center"
              color="blue-800"
              fontSize="sm"
            >
              blue-100
            </Box>
            <Box
              p={3}
              backgroundColor="blue-200"
              borderRadius="base"
              textAlign="center"
              color="blue-800"
              fontSize="sm"
            >
              blue-200
            </Box>
            <Box
              p={3}
              backgroundColor="blue-300"
              borderRadius="base"
              textAlign="center"
              color="blue-800"
              fontSize="sm"
            >
              blue-300
            </Box>
            <Box
              p={3}
              backgroundColor="blue-400"
              borderRadius="base"
              textAlign="center"
              color="blue-800"
              fontSize="sm"
            >
              blue-400
            </Box>
          </Box>
        </Box>

        {/* GraphQL デモ */}
        <Box className={section}>
          <Box as="h2" fontSize="xl" color="gray-800" mb={4}>
            📊 GraphQL データ取得デモ
          </Box>
          {sampleData.data?.samples ? (
            <Box>
              <Box color="gray-600" mb={2}>
                Server Componentsで取得したサンプルデータ:
              </Box>
              {sampleData.data.samples.map((sample: Sample) => (
                <Box key={sample.id} mb={2} p={2} backgroundColor="gray-50" borderRadius="base">
                  <Box as="strong" color="gray-800">{sample.title}</Box>
                  <Box color="gray-600" fontSize="sm">{sample.content}</Box>
                </Box>
              ))}
              <Box as="pre" backgroundColor="gray-100" p={3} borderRadius="base" fontSize="sm">
                {JSON.stringify(sampleData.data.samples, null, 2)}
              </Box>
            </Box>
          ) : (
            <Box color="gray-600">
              データの取得に失敗しました
            </Box>
          )}
        </Box>

        {/* Server Actions デモ */}
        <Box className={section}>
          <Box as="h2" fontSize="xl" color="gray-800" mb={4}>
            ⚡ Server Actions デモ
          </Box>
          <form action={createSampleAction}>
            <Box mb={4}>
              <Box as="label" display="block" color="gray-700" mb={1}>
                タイトル:
              </Box>
              <Box
                as="input"
                name="title"
                p={2}
                borderRadius="base"
                style={{
                  border: '1px solid #d1d5db',
                  width: '100%',
                }}
                placeholder="サンプルタイトル"
              />
            </Box>
            <Box mb={4}>
              <Box as="label" display="block" color="gray-700" mb={1}>
                内容:
              </Box>
              <Box
                as="textarea"
                name="content"
                p={2}
                borderRadius="base"
                style={{
                  border: '1px solid #d1d5db',
                  width: '100%',
                  minHeight: '80px',
                }}
                placeholder="サンプル内容"
              />
            </Box>
            <Button variant="primary" size="md">
              送信 (Server Action)
            </Button>
          </form>
        </Box>

        {/* 開発ツール */}
        <Box className={section}>
          <Box as="h2" fontSize="xl" color="gray-800" mb={4}>
            🔧 開発ツール
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            style={{ gap: '1rem' }}
          >
            <Box
              as="a"
              href="http://localhost:6006"
              target="_blank"
              rel="noopener noreferrer"
              p={3}
              backgroundColor="blue-500"
              color="white"
              borderRadius="base"
              textAlign="center"
              style={{ textDecoration: 'none' }}
            >
              📚 Storybook
            </Box>
            <Box
              p={3}
              backgroundColor="gray-200"
              color="gray-800"
              borderRadius="base"
              textAlign="center"
            >
              🎭 Chromatic (設定後)
            </Box>
            <Box
              p={3}
              backgroundColor="blue-600"
              color="white"
              borderRadius="base"
              textAlign="center"
            >
              ⚡ Fastly (プロダクション)
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
