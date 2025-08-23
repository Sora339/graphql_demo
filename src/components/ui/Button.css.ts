import { style } from '@vanilla-extract/css';

export const buttonStyle = style({
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

export const primaryStyle = style({
  backgroundColor: '#007bff',
  color: 'white',
  ':hover': {
    backgroundColor: '#0056b3',
  },
});

export const secondaryStyle = style({
  backgroundColor: '#6c757d',
  color: 'white',
  ':hover': {
    backgroundColor: '#545b62',
  },
});

export const dangerStyle = style({
  backgroundColor: '#dc3545',
  color: 'white',
  ':hover': {
    backgroundColor: '#c82333',
  },
});
