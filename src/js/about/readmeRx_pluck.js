import { Observable } from 'rxjs';

/**
 * Оператор/метод map принимает значение, которое в данный момент является текущим
 * return является обязательным параметром
 */

const createSubscribe = name => {
  return {
    next(x) {
      console.log(name, ': ', x);
    },
    error(err) {
      console.log(name, ': ', x);
    },
    completed() {
      console.log(name, ':  completed .');
    }
  };
};

Observable.fromEvent(document.querySelector('input'), 'keyup')
  /**
   * Реализация ванильного event.target.value
   * Метод pluck - сокращенная запись метода .map(x => x.target.value)
   * Передаем строковые ключи, которые необходимо достать
   */
  .pluck('target', 'value')
  .subscribe(createSubscribe('map'));
