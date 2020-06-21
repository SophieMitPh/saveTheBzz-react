import React, { useState, useEffect } from "react";
import './App.css';

// SERVICES
import productService from './services/productService';

function ProductsOverview() {
	const [products, setproducts] = useState(null);

	useEffect(() => {
		if(!products) {
			getProducts();
		}
	})

	const getProducts = async () => {
		let res = await productService.getAll();
		console.log(res);
		setproducts(res);
	}

	const renderProduct = product => {
		return (
			<div class="page">

			<div class="product-grid">
			<li key={product._id}>
			<div>

			<div class="imgBorder">
			<a href={"/products/product/" + product.name}><img class="product-image" src="Shirt.png" /></a>
			<div class="belowpic">
			<h2 id="h2-item-name">{product.name}</h2>
			<a href="/wishlist">
			<img class="wishlistIcon" src="wishList.png"/>
			</a>
			</div>
			</div>
			</div>
			</li>
			</div>
			</div>
	);
	};

	return (
		<div className="App">
		<div class="productTitle">
		<h1>Products</h1>
		</div>
		<ul className="list">
	{(products && products.length > 0) ? (
		products.map(product => renderProduct(product))
	) : (
		<p>No products found</p>
)}
</ul>
	</div>
);
}

export default ProductsOverview;
