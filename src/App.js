import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-text-field/dist/text-field.css';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, perssistor } from './redux/store'
import Appmain from './pages/mainapp'
function App() {
  return <Provider store={store}>
    <PersistGate persistor={perssistor}>
      <Appmain />
    </PersistGate>
  </Provider>
}

export default App;
