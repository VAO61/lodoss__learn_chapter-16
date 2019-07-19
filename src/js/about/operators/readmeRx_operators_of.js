import { Observable } from 'rxjs';

/**
 * Основная идея заключается в том, что мы можем создавать стримы из любых данных
 */
// of(любые простые данные)
// Observable.of(5).subscribe(
//   x => console.log(x),
//   err => console.log(err),
//   () => console.log('Completed.')
// );

let someObject = {
  key1: 'value1',
  key2: 'value2'
};

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

Observable.of(5, 'some string', [1, 'one'], someObject).subscribe(
  // x => console.log('Next:  ', x),
  // err => console.log('Error: ', err),
  // () => console.log('Completed.')
  createSubscribe('of')
);
