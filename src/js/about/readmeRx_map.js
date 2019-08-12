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

// Observable.interval(1000)
//   .map(
//     x => x * 2
//     // return x * 2;
//   )
//   .take(6)
//   .subscribe(createSubscribe('map'));

// Observable.of('Hello', 'world')
//   .map(x => x.toUpperCase())
//   .subscribe(createSubscribe('map'));

// Observable.fromEvent(document.querySelector('input'), 'keyup').subscribe(
//   createSubscribe('map')
// );

Observable.fromEvent(document.querySelector('input'), 'keyup')
  // Реализация ванильного event.target.value
  .map(x => x.target.value)
  .map(x => x.toUpperCase())
  .map(x => {
    return {
      value: x,
      length: x.length
    };
  })
  .subscribe(createSubscribe('map'));
