import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { tokens } from './tokens';

// 色を平坦化
const colors = {
  white: tokens.colors.white,
  black: tokens.colors.black,
  'gray-50': tokens.colors.gray[50],
  'gray-100': tokens.colors.gray[100],
  'gray-200': tokens.colors.gray[200],
  'gray-300': tokens.colors.gray[300],
  'gray-400': tokens.colors.gray[400],
  'gray-500': tokens.colors.gray[500],
  'gray-600': tokens.colors.gray[600],
  'gray-700': tokens.colors.gray[700],
  'gray-800': tokens.colors.gray[800],
  'gray-900': tokens.colors.gray[900],
  'blue-50': tokens.colors.blue[50],
  'blue-100': tokens.colors.blue[100],
  'blue-200': tokens.colors.blue[200],
  'blue-300': tokens.colors.blue[300],
  'blue-400': tokens.colors.blue[400],
  'blue-500': tokens.colors.blue[500],
  'blue-600': tokens.colors.blue[600],
  'blue-700': tokens.colors.blue[700],
  'blue-800': tokens.colors.blue[800],
  'blue-900': tokens.colors.blue[900],
  'green-50': tokens.colors.green[50],
  'green-100': tokens.colors.green[100],
  'green-200': tokens.colors.green[200],
  'green-300': tokens.colors.green[300],
  'green-400': tokens.colors.green[400],
  'green-500': tokens.colors.green[500],
  'green-600': tokens.colors.green[600],
  'green-700': tokens.colors.green[700],
  'green-800': tokens.colors.green[800],
  'green-900': tokens.colors.green[900],
  'red-50': tokens.colors.red[50],
  'red-100': tokens.colors.red[100],
  'red-200': tokens.colors.red[200],
  'red-300': tokens.colors.red[300],
  'red-400': tokens.colors.red[400],
  'red-500': tokens.colors.red[500],
  'red-600': tokens.colors.red[600],
  'red-700': tokens.colors.red[700],
  'red-800': tokens.colors.red[800],
  'red-900': tokens.colors.red[900],
};

// レスポンシブ対応のための条件を定義
const responsiveProperties = defineProperties({
  conditions: {
    base: {},
    sm: { '@media': `(min-width: ${tokens.breakpoints.sm})` },
    md: { '@media': `(min-width: ${tokens.breakpoints.md})` },
    lg: { '@media': `(min-width: ${tokens.breakpoints.lg})` },
    xl: { '@media': `(min-width: ${tokens.breakpoints.xl})` },
    '2xl': { '@media': `(min-width: ${tokens.breakpoints['2xl']})` },
  },
  defaultCondition: 'base',
  properties: {
    // レイアウト
    display: ['none', 'flex', 'block', 'inline', 'inline-block', 'grid'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: tokens.space,
    paddingBottom: tokens.space,
    paddingLeft: tokens.space,
    paddingRight: tokens.space,
    marginTop: tokens.space,
    marginBottom: tokens.space,
    marginLeft: tokens.space,
    marginRight: tokens.space,
    
    // サイズ
    width: {
      auto: 'auto',
      ...tokens.maxWidth,
    },
    maxWidth: tokens.maxWidth,
    height: {
      auto: 'auto',
      full: '100%',
      screen: '100vh',
    },
    
    // テキスト
    fontSize: tokens.fontSizes,
    textAlign: ['left', 'center', 'right'],
    color: colors,
    
    // 背景
    backgroundColor: colors,
    
    // ボーダー
    borderRadius: tokens.radii,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    p: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    m: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    maxW: ['maxWidth'],
    bg: ['backgroundColor'],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
