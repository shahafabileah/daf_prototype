import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CharityRow from './CharityRow';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CharityRow name="Friends of Kexp" url="http://www.kexp.org/" score={88} ein="91-2061474" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
