import { useTheme } from '../lib';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '12px 24px',
        backgroundColor: 'var(--background/primary/default)',
        color: 'var(--surface/base)',
        border: '1px solid var(--border/primary)',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 500,
      }}
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}
