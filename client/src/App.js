import React from 'react';
import ProductsOverview from './productsOverview';
import Header from './Header';


class App extends React.Component {
    render() {
        return (
            <div>
            <Header/>
            <ProductsOverview/>
            </div>
    );
    }
}

export default App;