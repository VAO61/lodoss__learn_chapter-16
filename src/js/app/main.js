import { getRandomUser } from './api';
import { renderingUserList } from './renderingUserDOM';
import { Observable } from 'rxjs';
import { createSubscribe } from './utils';

window.usersArray = [];

const userData$ = async () => {
  // let array = [];
  // let userData = await getRandomUser();
  // array.push(userData);
  // return array;
  let { data } = await getRandomUser();
  return data;
};

const render = async () => {
  await getUserData(3);
  renderingUserList(
    usersArray,
    document.querySelector('.widget-users__users-list.users-list')
  );
};

Observable.fromEvent(document.querySelector('#refresh'), 'click').subscribe(e =>
  render()
);

const getUserData = async count => {
  const requests = new Array(count).fill(null).map(userData$);
  usersArray = await Promise.all(requests);

  // for (let i = 1; i <= count; i++) {
  //   usersArray.push(userData$);
  // }
  // console.log(usersArray);
};

render();
// console.log(userData$);
// renderingUserWidget();

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
