import { useMantineTheme } from '@mantine/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import Box from '../../components/Box';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import { setGlobalModalChildren, showGlobalModal } from '../../reducers/GlobalModal/actions';
import useStyles from './styles';

interface IProps { }

const Home: React.FC<IProps> = () => {
  const { data: user } = useAuth();
  const { classes } = useStyles();
  const theme = useMantineTheme();
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
    <div className={classes.main}>
      <Button
        onClick={handleShowModal}
      >
        show test modal
      </Button>
      <Box>
        <div>user data: </div>
        <div style={{
          backgroundColor: theme.other.bgColors.secondaryAlt,
          padding: '.5rem',
          borderRadius: 3
        }}>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      </Box>
    </div>
  );
};

export default Home;