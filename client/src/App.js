import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsOverview from './components/product/ProductsOverview';
import ProductsIndex from './components/product/ProductIndex';
import AddProduct from './components/product/AddProduct';
import EditProduct from './components/product/editProduct';
import ProductDetail from './components/product/ProductDetail';
import Home from './components/Home';
import Header from './components/Header';

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