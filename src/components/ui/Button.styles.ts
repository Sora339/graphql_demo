/**
 * Storybook用のVanilla Extractヘルパー
 * Vanilla ExtractのスタイルをStorybookで安全に使用するためのラッパー
 */

import { style } from '@vanilla-extract/css';

// Storybook環境でVanilla Extractスタイルを安全に使用するためのヘルパー
export const createStorybookSafeStyle = (styleObj: Parameters<typeof style>[0]) => {
  try {
    return style(styleObj);
  } catch (error) {
    console.warn('Vanilla Extract style creation failed in Storybook:', error);
    // フォールバック：空文字列を返す
    return '';
  }
};

// 基本的なButtonスタイル
export const buttonBase = createStorybookSafeStyle({
  padding: '8px 16px',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500',
  transition: 'all 0.2s ease',
  ':hover': {
    transform: 'translateY(-1px)',
  },
});

export const primaryVariant = createStorybookSafeStyle({
  backgroundColor: '#007bff',
  color: 'white',
  ':hover': {
    backgroundColor: '#0056b3',
  },
});

export const secondaryVariant = createStorybookSafeStyle({
  backgroundColor: '#6c757d',
  color: 'white',
  ':hover': {
    backgroundColor: '#545b62',
  },
});
