import React, { useState, useEffect } from "react";
import '../../App.css';

// SERVICES
import productService from './../../services/productService';

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
			<li key={product.name}>
				<div className="imgBorder">
					<a href={"/product/detail/" + product._id}>
						<img className="product-image" src={product.name + ".png"} alt="product"/>
						</a>
					<div className="belowpic">
						<h2 id="h2-item-name">{product.name}</h2>
						<a href="/"><img className="wishlistIcon" src="/wishList.png" alt="wishlist icon"/></a>
					</div>
				</div>
			</li>
		)
	};

	return (
		<div className="page">
			<h2 className="productTitle">
				Products
			</h2>
		{(products && products.length > 0) ? (
			products.map(product => renderProduct(product))
		) : (
			<p>No products found</p>
		)}
		</div>
	);
}

export default ProductsOverview;
