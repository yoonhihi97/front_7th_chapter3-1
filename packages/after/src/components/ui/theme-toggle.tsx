import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeProvider';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // System 모드면 실제 적용된 테마 확인
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
        isDark ? 'bg-(--button-primary-bg)' : 'bg-(--color-border-default)'
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span
        className={cn(
          'inline-flex h-5 w-5 items-center justify-center rounded-full bg-(--card-bg) shadow-sm transition-transform',
          isDark ? 'translate-x-[22px]' : 'translate-x-0.5'
        )}
      >
        {isDark ? <Moon className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
      </span>
    </button>
  );
}
