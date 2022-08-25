import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import "@fontsource/dm-sans";
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LangProvider } from './context/langContext';
import imageSpinner from './assets/image/logo-short.svg'

const Home = lazy(()=> import('./pages/Home'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LangProvider>
  <React.StrictMode>
    <Suspense fallback={
      <div className='d-flex justify-content-center flex-column"'>
        <div className="p-2">
          <img alt="Loading" className='ImageSpinner' src={imageSpinner}></img>
          <h3 className='textLoading'>Loading...</h3>
        </div>
      </div>
      
    }>
      <Home />
    </Suspense>

  </React.StrictMode>
  </LangProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
