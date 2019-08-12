import '../../sass/style.scss';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../../html/about/pluck.html');
}

import './readmeRx_pluck';
