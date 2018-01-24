import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/Button';

ReactDOM.render(
  <div>
    <Button>Sup!</Button>
  </div>,
  document.getElementById('app')
);
