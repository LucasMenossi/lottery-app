import Dashboard from '../components/Home/Home'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Authentication from '../components/Authentication/Authentication'
import ResetPassword from '../components/ResetPassword/ResetPassword'
import Register from '../components/Register/Register'
import GamesList from '../components/GamesList/GamesList'

const Navigation = () => {
    const isLogin = localStorage.getItem("userEmail") !== null;
    return (
        <BrowserRouter basename='/lottery-app'>
            <Switch>
                <Route exact path="/">{isLogin ? <Redirect to="/dashboard"/> : <Authentication/>}</Route>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/games-list" component={GamesList} />
                <Route path="/reset-pass" component={ResetPassword} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation