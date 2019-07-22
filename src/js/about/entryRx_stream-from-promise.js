import '../../sass/style.scss';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../../html/about/stream-from-promise.html');
}

import './readmeRx_stream-from-promise';
