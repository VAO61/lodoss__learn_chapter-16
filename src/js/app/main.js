import { getRandomUser } from './api';
import { clearContainers, renderingUser } from './renderingUserDOM';
import { Observable } from 'rxjs';

const userData$ = Observable.create(observer => {
  getRandomUser().then(({ data }) => {
    observer.next(data);
    observer.complete();
  });
});

Observable.fromEvent(document.querySelector('#refresh'), 'click').subscribe(e =>
  showUserList(3)
);

export const showUser = index => {
  userData$.subscribe(data => {
    const userWidget = renderingUser(data, index);
    const container = document.querySelector(`.user-${index}`);
    container.appendChild(userWidget);
  });
};

const showUserList = count => {
  clearContainers('.users-list__user');
  for (let i = 0; i < count; i++) {
    showUser(i);
  }
};

showUserList(3);
