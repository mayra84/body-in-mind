//@ts-check
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'



const theme = extendTheme({
  colors: {
    brand: {
      100: "#F6FFF8",
      200: "#EAF4F4",
      300: "#CCE3DE",
      400: "#A4C3B2",
      500: "#6B9080",
      600: "#264653"
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'brand.300',
        // color: 'black',
      },
    },
  }
})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
