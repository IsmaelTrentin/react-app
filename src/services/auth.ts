import axios from './Axios';
import { ACCESS_TOKEN, REFRESH_TOKEN } from './../util/local.storage.keys';

export const authenticate = async (email: string, pwd: string) => {
  try {
    const { data } = await axios.post('/auth/login', { email, pwd });
    localStorage.setItem(ACCESS_TOKEN, data.accessToken);
    localStorage.setItem(REFRESH_TOKEN, data.refreshToken);
    return true;
  } catch (error) {
    const { status } = error.response;
    if (status === 404) {
      // eslint-disable-next-line no-throw-literal
      throw {
        code: 404,
        message: 'Unexisting user'
      };
    }
    if (status === 401) {
      // eslint-disable-next-line no-throw-literal
      throw {
        code: 401,
        message: 'Wrong email or password'
      };
    }
  }
  return false;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { authenticate };