import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsOverview from './ProductsOverview';
import Home from './Home';
import Header from './Header';


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div>
            <Header/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/products" component={ProductsOverview}/>
                    <Route component={Error}/>
                </Switch>
            </div>
            </BrowserRouter>
                );
    }
}

export default App;