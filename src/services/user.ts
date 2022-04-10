import axios from './../services/Axios';

export const getUser = async (_id: string) => {
  const { data } = await axios.get(`/users/${_id}`);
  return data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getUser };