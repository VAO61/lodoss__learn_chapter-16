import { getRandomUser } from './api';
import { renderingUserWidget, renderingUserList } from './renderingUserDOM';
import { Observable } from 'rxjs';
import { createSubscribe } from './utils';

let usersArray = [];

const userData$ = (async () => {
  // let array = [];
  // let userData = await getRandomUser();
  // array.push(userData);
  // return array;
  let userData = await getRandomUser();
  return userData;
})();

Observable.fromEvent(document.querySelector('#refresh'), 'click').subscribe(e =>
  getUserData(3)
);

const getUserData = count => {
  for (let i = 1; i <= count; i++) {
    usersArray.push(userData$);
  }
  console.log(usersArray);
};

getUserData(3);
// console.log(userData$);
renderingUserWidget();

// Rx.Observable.fromPromise(axios.get('//jsonplaceholder.typicode.com/users'))

/**
 * Observable.fromEvent(document.querySelector('#refresh'), 'click')
 * .debounceTime(2000) // не чаще, чем раз в 2 секунды чтобы не спамить апишке
 * .mergeMap(randomLogin => Observable.fromPromise(apiGetUser(randomLogin)))
 * .cache(error => Observable.of(error))
 * .subscribe(x => {
 *  ...
 * })
 */
