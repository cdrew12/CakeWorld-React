import React from 'react';
import ReactDOM from 'react-dom';
import 'purecss';
import 'purecss/build/grids-responsive.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './components/App/App';
import './css/index.css';

const cakesURL = 'https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json';

ReactDOM.render(
  <App cakesDataURL={cakesURL} />,
  document.getElementById('root')
);
