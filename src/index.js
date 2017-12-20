import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'rxjs';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './common/common.css';
// components
import Header from './common/containers/Header'
import Menus from './common/containers/Menus'

// routes
import routes from './routes';


ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div className="App">
		    <Header />
		    <Menus />
		    <div className="wrap">
		     	{routes}
		    </div>
		  </div>
		</ConnectedRouter>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
