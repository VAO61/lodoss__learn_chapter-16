import { Observable } from 'rxjs';
import { getRandomUser } from './api';
import { renderingUser, renderingUserList } from './renderingUserDOM';

const countUsersInPage = 3;

const randomUserData$ = Observable.create(observer => {
  getRandomUser()
    .then(response => {
      observer.next(response.data);
      observer.complete();
    })
    .catch(error => {
      observer.error(error);
    });
});

let subscription = randomUserData$.subscribe({
  next: data => console.log('{RandomUser}: ', data),
  complete: data => console.log('[complete]')
});

Observable.fromEvent(document.querySelector('#refresh'), 'click').subscribe(e =>
  showUsers(countUsersInPage)
);

function showUsers(count) {
  for (let i = 1; i <= count; i += 1) {
    randomUserData$.subscribe(data => renderingUser(data, i));
    console.log(randomUserData$);
  }
  // createEventUsers(to);
}

showUsers(countUsersInPage);

// renderingUserWidget();
