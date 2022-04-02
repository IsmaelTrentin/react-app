import React from 'react';
import useStyles from './app.styles';
import GlobalModal from './GlobalModal';
import AppRouter from '../routes/MainRouter';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App: React.FC<{}> = () => {
  const { classes } = useStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={classes.app}>
        <AppRouter />
        <GlobalModal />
      </div>
    </QueryClientProvider>
  );
}

export default App;
