import { useQuery } from 'react-query';
import { IResponseError, IUser } from '../@types';
import { SESH_KEY } from '../util/local.storage.keys';
import { QK_USER } from '../util/query.keys';
import axios from './../services/Axios';

const isDev = process.env.REACT_APP_DEV;

const fetchUser = async () => {
  const seshId = localStorage.getItem(SESH_KEY);
  if (!seshId) {
    return undefined;
  }
  if (!isDev) {
    const testData: IUser = {
      name: 'test user'
    }
    return testData;
  }
  const { data } = await axios.get(`/sesh/${seshId}`);
  return data.user;
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