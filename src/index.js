import React from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './js/App';
import * as serviceWorker from './service/serviceWorker';

render(
<App />, 
document.getElementById('root'));
serviceWorker.unregister();
