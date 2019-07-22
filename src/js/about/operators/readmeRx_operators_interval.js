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
 * Оператор take(n) берет N значений перед остановкой наблюдаемого / непрерывного потока
 */
Observable.interval(250)
  .take(15) // на 15-м значении поток прервётся
  .subscribe(createSubscribe('interval'));
