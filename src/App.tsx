import React from 'react';
import styles from './app.module.scss';
import AppRouter from './routes/AppRouter';

const App: React.FC<{}> = () => {
  return (
    <div className={styles.app}>
      <AppRouter />
    </div>
  );
}

export default App;
