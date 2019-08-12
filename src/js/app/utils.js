// import { apiGetUserList } from './api';

// export const getRandomLogin = () => {
//   // const state = store.getState();
//   const randomIndex = Math.floor(Math.random() * responseUserList.data.length);
//   console.log(responseUserList.data[randomIndex].login);

//   return userList[randomIndex].login;
// };

export const createSubscribe = name => {
  return {
    next(x) {
      console.log(name, ': ', x);
    },
    error(err) {
      console.log(name, ': ', x);
    },
    completed() {
      console.log(name, ':  completed!');
    }
  };
};
