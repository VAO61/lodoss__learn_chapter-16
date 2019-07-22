import { Observable } from 'rxjs';

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

const delay = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms / 1000 + 'sec passed');
    }, ms);
  });
};

delay(1000).then(() => {
  console.log('Promise was resolved');
});

const promise$ = Observable.fromPromise(delay(2000));

promise$.subscribe(createSubscribe('fromPromise'));

// Не возвращает completed()
