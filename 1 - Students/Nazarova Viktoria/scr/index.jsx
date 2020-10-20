import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import MessageField from './MessageField';
import Messages from './components/Messages/Messages';

ReactDOM.render(
  <MessageField />,
  <Messages />,
  document.getElementById('root')
);

