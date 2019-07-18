/**
 * RxJS - библиотека, позволяющая применить подход реактивного программирования в JavaScript.
 */

import * as Rx from 'rxjs';

// $ - маркер ассинхронности в окончании перемееной для разработчиков
var stream$ = Rx.Observable.create(function(observer) {
  /**
   * RxJs устроен так, что если слушателей нет - то стрим он не создаёт, т.е. не задаходит в эту функцию
   * Если стрим не используется - то и не будет создаваться. Фича оптимизации
   * console.log('stream$ was created'); не будет показан...
   */

  /**
   * observer - объект, с помощью которого можно осуществлять какие-то ассинхронные действия
   * next() - метод, позволяющий сделать триггер (хранимая процедура, которая исполняется при наступлении какого-то события)
   * Можно сравнить с нажатием кнопки мыши, браузер триггерит это событие
   */
  observer.next('One');

  setTimeout(function() {
    observer.next('After 4 sec');
  }, 4000);

  /**
   * Форсированный вызов ошибки
   */
  setTimeout(function() {
    observer.error('Something went wrong!');
  }, 1000);

  /**
   * observer.complete()
   * Форсированное прекращение стрима. Стрим автоматически "убивает" всех слушателей, которые у него есть
   */
  setTimeout(() => {
    observer.complete();
  }, 3000);

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
stream$.subscribe(
  function(data) {
    console.log('Subscribe: ', data);
  },
  function(error) {
    console.log('Error: ', error);
  },
  function() {
    console.log('Completed!');
  }
);
