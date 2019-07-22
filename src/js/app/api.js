const axios = require('axios');

export const apiGetUserList = async () => {
  const responseUserList = await axios.get('https://api.github.com/users');
  // console.log(responseUserList.data); // ok
  // console.log(responseUserList.data.length); // ok
  // const randomIndex = Math.floor(Math.random() * responseUserList.data.length);
  // console.log(responseUserList.data[randomIndex].login); // ok
  // console.log(responseUserList.data[2].login); // ok
  var loginList = [];

  responseUserList.data.forEach((item, index) => {
    // console.log(responseUserList.data[index].login); // ok
    loginList.push(responseUserList.data[index].login);
  });

  // console.log(loginList); // ok

  return loginList;
};

export const getRandomLogin = dataList => {
  const randomIndex = Math.floor(Math.random() * dataList.length);
  return randomIndex;
};

export const apiGetUser = async login => {
  const responseUser = await axios.get(`https://api.github.com/users/${login}`);
  // console.log('123' + responseUser.data); // not ok
  return responseUser.data;
};
