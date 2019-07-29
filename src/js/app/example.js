import { Observable } from 'rxjs';
import { getRandomUser } from './api';
import { renderingUserWidget, renderingUserList } from './renderingUserDOM';
import { createSubscribe } from './utils';

const countUsersInPage = 3;

// const clickRefresh = Observable.fromEvent(document.querySelector('#refresh'), 'click')

let usersArray = [];

const userData$ = (async () => {
  let userData = await getRandomUser();
  console.log(userData);
  return userData;
})();

Observable.fromEvent(document.querySelector('#refresh'), 'click')
  // .mergeMap(v => Observable.fromPromise(userData$(v)))
  // .catch(error => Observable.of(error))
  .subscribe(x => {
    for (let i = 1; i <= countUsersInPage; i++) {
      getRandomUser().then(res => usersArray.push(res.data));
      console.log(usersArray);
    }
  });

renderingUserWidget();

// const getUsers = PromiseAll([userData$]).then(data => {
//   for (let i = 1; i <= countUsersInPage; i++) {
//     usersArray.push(data);
//   }
//   console.log(usersArray);
// });

const getUsers = () => {
  for (let i = 1; i <= countUsersInPage; i++) {
    usersArray.push(userData$);
  }
  // console.log(usersArray);
};

getUsers();
// const

/**
 * Observable.fromEvent(document.querySelector('#refresh'), 'click')
 * .debounceTime(2000) // не чаще, чем раз в 2 секунды чтобы не спамить апишке
 * .mergeMap(randomLogin => Observable.fromPromise(apiGetUser(randomLogin)))
 * .cache(error => Observable.of(error))
 * .subscribe(x => {
 *  ...
 * })
 */
