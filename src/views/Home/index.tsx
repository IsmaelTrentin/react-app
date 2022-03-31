import React from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { setGlobalModalChildren, showGlobalModal } from '../../reducers/GlobalModal/actions';
import styles from './index.module.scss';

interface IProps { }

const Home: React.FC<IProps> = () => {
  const { data: user } = useAuth();
  const dispatch = useDispatch();
  const handleShowModal = () => {
    dispatch(
      setGlobalModalChildren(<h1>username: {user ? user.name : 'loading...'}</h1>)
    );
    dispatch(
      showGlobalModal()
    );
  };

  return (
    <div className={styles.main}>
      <div>user data: <pre>{JSON.stringify(user, null, 2)}</pre></div>
      <button
        onClick={handleShowModal}
      >
        show test modal
      </button>
    </div>
  );
};

export default Home;