import { Provider } from 'react-redux';
import './App.css';
import Navigation from './navigation'
import store from './store'

function App() {
  return (
    <Provider store = {store}>
      <Navigation />
    </Provider>
  );
}

export default App;
