import axios from 'axios';

const instance = axios.create({
  baseURL: ''
});
instance.defaults.headers.common['Authorization'] = '';
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;