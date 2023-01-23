import './index.css';
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          -webkit-font-smoothing: antialiased;
          overscroll-behavior: none;
          font-family: Inter, -apple-system, BlinkMacSystemFont, 'San Francisco',
            Roboto, 'Segoe UI', 'Helvetica Neue', sans-serif;
          background-color: rgb(255, 255, 255);
          color: rgb(29, 29, 29);
          display: flex;
          flex-flow: column nowrap;
          -webkit-box-pack: justify;
          justify-content: space-between;
          min-height: 100vh;
        }
        *,
        ::after,
        ::before {
          box-sizing: border-box;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
