import React, { useState, useEffect } from "react";
import ProductsIndexItems from './ProductIndexItems';
import '../../css/cart.css';

import productService from './../../services/productService';

function ProductsIndex() {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		if(!products) {
			getProducts();
		}
	})

	const getProducts = async () => {
		let res = await productService.getAll();
		console.log(res);
		setProducts(res);
	}

	const handleDelete = async (id) => {
		let res = await productService.remove(id);
		console.log(res);
		setProducts(res);
	}

	return (
	<div className="main">
		<div className="pageTitle">
			<h1>Our Products</h1>
		</div>
		<div className="cart-container">
			<table className="table">
				<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Edit</th>
					<th>Delete</th>
				</tr>
				</thead>
				{(products && products.length > 0) ? (
					products.map((product) =>
						<ProductsIndexItems id={product._id} name={product.name} description={product.description} handleDelete={() => handleDelete(product._id)}/>)
				) : (
					<h3>No products found</h3>
				)}
					</table>
					</div>
					</div>
	);
}

export default ProductsIndex;
