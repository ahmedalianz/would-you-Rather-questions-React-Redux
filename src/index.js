import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './index.css'
import { ToastContainer } from 'react-toastify'
import store from './redux/store'
import { Provider } from 'react-redux';

ReactDOM.render(
        <Provider store={store}>
            <App />
            <ToastContainer/>
        </Provider>,
document.getElementById('root'))
