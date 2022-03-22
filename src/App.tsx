import React from 'react';
import styles from './app.module.scss';
import GlobalModal from './components/GlobalModal';
import AppRouter from './routes/AppRouter';

const App: React.FC<{}> = () => {

  return (
    <div className={styles.app}>
      <AppRouter />
      <GlobalModal />
    </div>
  );
}

export default App;
