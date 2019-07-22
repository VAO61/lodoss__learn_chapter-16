import 'sass/style.scss';
import './app/main';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../html/index.html');
}
