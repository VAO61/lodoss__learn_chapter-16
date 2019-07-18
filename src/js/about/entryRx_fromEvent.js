import '../../sass/style.scss';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../../html/about/from-event.html');
}

// import 'rxjs/bundles/Rx.min.js';
import './readmeRx_fromEvent';
