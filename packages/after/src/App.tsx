import React from 'react';
import { Header, Toaster } from './components/ui';
import { ManagementPage } from './pages/ManagementPage';
import { ThemeProvider } from './contexts/ThemeProvider';

export const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-(--color-bg-secondary)">
        <Header />
        <main>
          <ManagementPage />
        </main>
        <Toaster position="top-right" />
      </div>
    </ThemeProvider>
  );
};
