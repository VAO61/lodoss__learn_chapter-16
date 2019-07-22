const axios = require('axios');

export const getRandomLogin = async () => {
  const { data } = await axios.get('https://api.github.com/users');
  const randomLogin = Math.floor(Math.random() * data.length);
  const { login } = data[randomLogin];
  const responseUser = await axios.get(`https://api.github.com/users/${login}`);
  return responseUser.data;
};
