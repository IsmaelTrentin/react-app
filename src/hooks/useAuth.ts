import { useQuery } from 'react-query';
import { IResponseError, IUser } from '../@types';
import { ACCESS_TOKEN } from '../util/local.storage.keys';
import { QK_USER } from '../util/query.keys';
import axios from './../services/Axios';
import UserService from './../services/user';
import jwtd from 'jwt-decode';

const isDev = process.env.REACT_APP_DEV;
const fetchUser = async () => {
  const at = localStorage.getItem(ACCESS_TOKEN);
  if (!at) {
    return undefined;
  }
  if (isDev) {
    const testData: IUser = {
      name: 'test user'
    }
    return testData;
  }
  try {
    const { _id } = jwtd<{ _id: string }>(at);
    axios.defaults.headers.common['Authorization'] = `Bearer ${at}`;
    const user = await UserService.getUser(_id);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const useAuth = () => {
  return useQuery<IUser, IResponseError>(
    QK_USER,
    fetchUser,
    {
      refetchOnWindowFocus: false
    }
  );
};