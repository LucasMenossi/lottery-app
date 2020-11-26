import './App.css';
import SelectGame from './components/Controller/SelectGame'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Authentication from './components/Authentication/Authentication'
import ResetPassword from './components/ResetPassword/ResetPassword'
import Register from './components/Register/Register'
function App() {
  return (
    <div>
      <BrowserRouter basename='/lottery-app'>
        <Switch>
          <Route exact path="/" component={Authentication} />
          <Route path="/resetPass" component={ResetPassword} />
          <Route path="/register" component={Register} />
          <Route path="/selectGame" component={SelectGame} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
