import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Home from './pages/Home';
const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
