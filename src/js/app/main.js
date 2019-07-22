import { apiGetUserList, getRandomLogin, apiGetUser } from './api';
import { renderingUserWidget, renderingUserList } from './renderingUserDOM';
import { Observable } from 'rxjs';
import { createSubscribe } from './utils';

const userData$ = (async () => {
  let loginList = await apiGetUserList();
  let randomLogin = getRandomLogin(loginList);
  let userData = await apiGetUser(randomLogin);
  console.log(userData);
})();

// // Observable.fromEvent(document.querySelector('#refresh'), 'click')
// //   // .subscribe(createSubscribe(''));
// //   // .subscribe(e => getUserData(3));
// //   .subscribe(e => getUserData(3));

// const getUserData = count => {
//   for (let i = 0; 1 < count; i++) {
//     userData$.subscribe(data => userData(data.i));
//   }
// };

// getUserData(3);

renderingUserWidget();

/**
 * Observable.fromEvent(document.querySelector('#refresh'), 'click')
 * .debounceTime(2000) // не чаще, чем раз в 2 секунды чтобы не спамить апишке
 * .mergeMap(randomLogin => Observable.fromPromise(apiGetUser(randomLogin)))
 * .cache(error => Observable.of(error))
 * .subscribe(x => {
 *  ...
 * })
 */
