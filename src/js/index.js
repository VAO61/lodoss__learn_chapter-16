import 'sass/style.scss';
import { apiGetUserList, getRandomLogin, apiGetUser } from './app/api';
import { renderingUserWidget, renderingUserList } from './app/renderingUserDOM';
// Аналогично с 'js/app/api'. AbsPath работает --> ok
// import { getRandomLogin } from './app/utils';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../html/index.html');
}
// apiGetUserList();
(async () => {
  // await apiGetUserList();
  console.log(await apiGetUserList()); // ok
  // console.log(await apiGetUserList(getRandomLogin())); // not ok
})();

// apiGetUserList().then(getRandomLogin());
apiGetUser();

renderingUserWidget();
// console.log(renderingUserWidget);
// document.querySelector('#refresh').addEventListener('click', refresh);
