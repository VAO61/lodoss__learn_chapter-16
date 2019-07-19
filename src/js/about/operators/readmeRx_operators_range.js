import { Observable } from 'rxjs';

function createSubscribe(name) {
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
}

/**
 * Метод range() позволяет получить значения в заданном интервале
 * 1й параметр - значение, с которого нужно начать
 * 2й параметр - количество значений, которые нужно получить
 */
Observable.range(5, 15) // с 5го значения 15ть значений/элементов
  .subscribe(createSubscribe('range'));
