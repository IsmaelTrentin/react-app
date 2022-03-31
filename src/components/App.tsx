import React from 'react';
import styles from './app.module.scss';
import GlobalModal from './GlobalModal';
import AppRouter from '../routes/MainRouter';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App: React.FC<{}> = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.app}>
        <AppRouter />
        <GlobalModal />
      </div>
    </QueryClientProvider>
  );
}

export default App;
