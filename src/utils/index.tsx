import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';




const stripePromise = loadStripe('pk_test_51NakH0IOuX6Fj95lL7siw4WKB4u8VMmLSI78bW2UbfqwhStQFhAUuKJim2UqhXFDrKsGwCJINm4slLPFzGOlNAXO00ksIGjNin');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

