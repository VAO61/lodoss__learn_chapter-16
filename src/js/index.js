import 'sass/style.scss';
// import './app/main';
// import './app/example';
// import './app/example2';
import './app/example3';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!../html/index.html');
}
