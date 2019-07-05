import 'sass/style.scss';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../../html/about/from-event.html');
}

import '../../../node_modules/rxjs/bundles/rxjs.umd.min';
import './readmeRx_fromEvent';
