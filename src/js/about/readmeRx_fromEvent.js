// import * as Rx from 'rxjs';
import { Observable } from 'rxjs';
// import { Observable, Of } from 'rxjs';
console.log(Observable);

// import fromEvent from 'rxjs/add/observable/fromEvent';

var button = document.querySelector('button');

var btn$ = Observable.fromEvent(button, 'click');

btn$.subscribe(function(event) {
  console.log(event);
});
