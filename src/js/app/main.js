import { apiGetUserList, getRandomLogin, apiGetUser } from './api';
import { renderingUserWidget, renderingUserList } from './renderingUserDOM';
import { Observable } from 'rxjs';
import { createSubscribe } from './utils';

const userData$ = (async () => {
  let loginList = await apiGetUserList();
  // console.log(loginList.length);
  let randomLogin = getRandomLogin(loginList);
  // console.log(randomLogin);
  let userData = await apiGetUser(randomLogin);
  console.log(userData);
})();

// Observable.fromEvent(document.querySelector('#refresh'), 'click')
//   // .subscribe(createSubscribe(''));
//   .subscribe(e => getUserData(3));

// const getUserData = count => {
//   for (let i = 0; 1 < count; i++) {
//     userData$.subscribe(userData => userData(userData.i));
//   }
// };

// getUserData(3);

renderingUserWidget();
