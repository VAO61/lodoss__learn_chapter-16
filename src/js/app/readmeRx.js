import * as Rx from 'rxjs';
// // import { Observable } from 'rxjs';
// // // // console.log(Observable);
// // import { Rx } from 'rxjs';
// // // // console.log(Rx);

// $ - маркер ассинхронности в окончании перемееной для разработчиков
var stream$ = Rx.Observable.create(function(observer) {
  /**
   * observer - объект, с помощью которого можно осуществлять какие-то ассинхронные действия
   * next() - метод, позволяющий сделать триггер какого-то события
   */
  observer.next('One');

  setTimeout(function() {
    observer.next('After 3 sec');
  }, 3000);
});

/**
 * subscribe() - подписка на какие-то события
 * Метод, принимающий в качестве аргументов функцию callback, с помощью которого обрабатываются входящие данные
 */
stream$.subscribe(function(data) {
  console.log('Subscribe: ', data);
});
