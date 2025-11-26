import React from 'react';
import { Header } from './components/ui';
import { ManagementPage } from './pages/ManagementPage';
import { AlertProvider } from './contexts/AlertContext';
import { AlertContainer } from './components/shared/AlertContainer';
import './styles/components.css';

export const App: React.FC = () => {
  return (
    <AlertProvider>
      <div style={{ minHeight: '100vh', backgroundColor: '#f7fafc' }}>
        <Header />
        <main>
          <AlertContainer />
          <ManagementPage />
        </main>
      </div>
    </AlertProvider>
  );
};
