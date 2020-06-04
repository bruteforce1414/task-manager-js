import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider } from 'material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});


const store = createStore(rootReducer);


ReactDOM.render(
   <Provider store={store}>
    <MuiThemeProvider theme={theme}>,
    <App/>,
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'));
  registerServiceWorker();

