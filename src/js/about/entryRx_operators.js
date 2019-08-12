import '../../sass/style.scss';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../../html/about/operators.html');
}
/**
 * All operators:
 * http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html
 */
import './operators/readmeRx_operators_of';
import './operators/readmeRx_operators_interval';
import './operators/readmeRx_operators_timer';
import './operators/readmeRx_operators_range';
