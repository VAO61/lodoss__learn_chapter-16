import '../../sass/style.scss';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../../html/about/operators.html');
}

import './readmeRx_operators';
