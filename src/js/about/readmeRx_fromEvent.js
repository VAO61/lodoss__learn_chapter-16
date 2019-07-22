// import * as Rx from 'rxjs'; // ok, but why?
// import Rx from 'rxjs'; // ok
// console.log(Rx); // ok
// console.log(Rx.Observable); // ok

import { Observable } from 'rxjs';

// import fromEvent from 'rxjs/add/observable/fromEvent'; // Не пригодилось

var button = document.querySelector('button');

/**
 * Оператор fromEvent() преобразует поток события в объект Observable.
 * Под событием здесь подразумевается любое действие, которое может быть инициировано пользователем в браузере:
 * клик мыши, перемещение курсора, нажатие клавиши, взаимодействие с полями формы и т.д.
 */
var btn$ = Observable.fromEvent(button, 'click');

btn$.subscribe(function(e) {
  console.log(e);
});

Observable.fromEvent(document.querySelector('input'), 'keyup').subscribe(e => {
  console.log(e);
});

Observable.fromEvent(document, 'mousemove').subscribe(e => {
  document.querySelector('h1').innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`;
});
