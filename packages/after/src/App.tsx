import React from 'react';
import { Header, Toaster } from './components/ui';
import { ManagementPage } from './pages/ManagementPage';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      <main>
        <ManagementPage />
      </main>
      <Toaster position="top-right" />
    </div>
  );
};
