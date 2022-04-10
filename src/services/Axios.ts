import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3333/api/v1'
});
instance.defaults.headers.common['Authorization'] = '';
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;