import 'sass/style.scss';
// import './app/main';
import './app/example';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../html/index.html');
}
