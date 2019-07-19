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
 * Метод timer() принимает в себя 2 параметра:
 * 1й - насколько надо задержать выполнение кода
 * 2й - по сути interval, с какой периодичностью нужно выводить те или иные значения
 */
Observable.timer(4000, 500)
  .take(10) // на 10-м значении поток прервётся
  .subscribe(createSubscribe('timer'));
