import '../../sass/style.scss';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../../html/about/stream-from-array.html');
}

import './readmeRx_stream-from-array';
