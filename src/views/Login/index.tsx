// import Button from './../../components/Button';
import React from 'react';
import useStyles from './styles';
import { TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useAuth } from '../../hooks/useAuth';
import AuthService from './../../services/auth';
import Box from '../../components/Box';

interface IProps { }

const Login: React.FC<IProps> = () => {
  const { classes } = useStyles();
  const { refetch } = useAuth();
  const form = useForm<{ email: string, pwd: string }>({
    initialValues: {
      email: '',
      pwd: ''
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    }
  });

  const onSubmit = async (values: { email: string, pwd: string }) => {
    try {
      const res = await AuthService.authenticate(values.email, values.pwd);
      if (res) {
        form.reset();
        refetch();
        return;
      }
      alert('Unknown error')
    } catch (error) {
      alert('error');
    }
  };

  return (
    <div className={classes.main}>
      <Box style={{}}>
        <form onSubmit={form.onSubmit(onSubmit)}>
          <TextInput
            required
            type={'email'}
            label={'Email'}
            placeholder={'example@email.com'}
            {...form.getInputProps('email')}
          />
          <TextInput
            required
            type={'password'}
            label={'Password'}
            placeholder={'abc123'}
            {...form.getInputProps('pwd')}
          />
          <Button type={'submit'}>
            Login
          </Button>
        </form>
      </Box>

    </div>
  );
};

export default Login;