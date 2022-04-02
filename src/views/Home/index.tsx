import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import { setGlobalModalChildren, showGlobalModal } from '../../reducers/GlobalModal/actions';

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
    <div>
      <div>user data: <pre>{JSON.stringify(user, null, 2)}</pre></div>
      <Button
        onClick={handleShowModal}
      >
        show test modal
      </Button>
    </div>
  );
};

export default Home;