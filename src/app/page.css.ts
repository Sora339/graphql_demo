import { style } from '@vanilla-extract/css';

export const pageContainer = style({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
});

export const contentCard = style({
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  padding: '2rem',
  maxWidth: '800px',
  margin: '0 auto',
});

export const section = style({
  marginBottom: '2rem',
  padding: '1.5rem',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
});

export const sectionTitle = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: '#374151',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1rem',
  marginBottom: '2rem',
});

export const card = style({
  backgroundColor: '#f9fafb',
  padding: '1.5rem',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
});

export const cardTitle = style({
  fontSize: '1.125rem',
  fontWeight: '600',
  marginBottom: '0.5rem',
  color: '#1f2937',
});

export const cardDescription = style({
  color: '#6b7280',
  marginBottom: '1rem',
});

export const buttonGroup = style({
  display: 'flex',
  gap: '0.5rem',
  flexWrap: 'wrap',
});

export const codeBlock = style({
  backgroundColor: '#1f2937',
  color: '#f3f4f6',
  padding: '1rem',
  borderRadius: '8px',
  fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
  fontSize: '0.875rem',
  overflow: 'auto',
  marginTop: '1rem',
});

export const badge = style({
  display: 'inline-block',
  backgroundColor: '#dbeafe',
  color: '#1e40af',
  padding: '0.25rem 0.75rem',
  borderRadius: '9999px',
  fontSize: '0.75rem',
  fontWeight: '500',
  marginRight: '0.5rem',
  marginBottom: '0.5rem',
});

export const featureList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

export const featureItem = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0.75rem',
  ':before': {
    content: '✓',
    color: '#10b981',
    fontWeight: 'bold',
    marginRight: '0.75rem',
    fontSize: '1.125rem',
  },
});

export const highlight = style({
  backgroundColor: '#fef3c7',
  padding: '0.125rem 0.25rem',
  borderRadius: '4px',
  fontWeight: '500',
});
