import '../sass/style.scss';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../html/index.html');
}

import '../../node_modules/rxjs/bundles/rxjs.umd.min.js';
import './about/readmeRx.js';
