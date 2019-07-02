import * as Rx from 'rxjs';
// // import { Observable } from 'rxjs';
// // // // console.log(Observable);
// // import { Rx } from 'rxjs';
// // // // console.log(Rx);

// $ - маркер ассинхронности в окончании перемееной для разработчиков
var stream$ = Rx.Observable.create(function(observer) {
  /**
   * RxJs устроен так, что если слушателей нет - то стрим он не создаёт, т.е. не задаходит в эту функцию
   * Если стрим не используется - то и не будет создаваться. Фича оптимизации
   * console.log('stream$ was created'); не будет показан...
   */

  /**
   * observer - объект, с помощью которого можно осуществлять какие-то ассинхронные действия
   * next() - метод, позволяющий сделать триггер какого-то события
   */
  observer.next('One');

  setTimeout(function() {
    observer.next('After 4 sec');
  }, 4000);

  /**
   * Вне зависимости от порядка написания порядок будет ассинхронным с указанной задержкой
   */
  setTimeout(function() {
    observer.next('After 2 sec');
  }, 2000);

  observer.next('Two');
});

/**
 * subscribe() - подписка на какие-то события
 * Метод, принимающий в качестве аргументов функцию callback, с помощью которого обрабатываются входящие данные
 */
stream$.subscribe(function(data) {
  console.log('Subscribe: ', data);
});
