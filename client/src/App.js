import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsOverview from './ProductsOverview';
import ProductsIndex from './ProductIndex';
import AddProduct from './AddProduct';
import EditProduct from './editProduct';
import ProductDetail from './ProductDetail';
import Home from'./Home';
import Header from './Header';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div>
            <Header/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route exact path="/products" component={ProductsOverview}/>
                    <Route exact path="/products/index" component={ProductsIndex}/>
                    <Route path="/product/new" component={AddProduct}/>
                    <Route path="/product/edit/:id" component={EditProduct}/>
                    <Route path="/product/detail/:id" component={ProductDetail}/>
                    <Route component={Error}/>
                </Switch>
            </div>
            </BrowserRouter>
                );
    }
}

export default App;