import axios from 'axios';

// end points
const JSONPlaceholderURL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  const response = await axios.get(`${JSONPlaceholderURL}/users`);
  return response.data;
};

export const getUser = async (id) => {
  const response = await axios.get(`${JSONPlaceholderURL}/users/` + id);
  return response.data;
};

export const getUserPosts = async (userId) => {
  const response = await axios.get(
    `${JSONPlaceholderURL}/posts?userId=${userId}`
  );
  return response.data;
};
