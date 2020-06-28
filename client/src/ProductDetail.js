import React, { useState, useEffect } from "react";
import './AddProduct.css';
import './product.css';
import productService from './services/productService';

const ProductDetail = (props) => {
	const initialProductState = {
		id: null,
		name: "",
		description: "",
		price: null
	};

	const [product, setProduct] = useState(initialProductState);

	const getProduct = (id) => {
		productService.getOne(id)
			.then(response => {
				setProduct(response.product);
				console.log(response.product);
			})
			.catch(e => {
				console.log(e);
			});
	};

	useEffect(() => {
		getProduct(props.match.params.id);
	}, [props.match.params.id]);

	return (
		<div className="main">
			{ product ? (
				<div>
					<div className="productTitle">
						<h1>
							{ product.name }
						</h1>
					</div>
				<div className="detailView">
					<div className="imgBorder">
						<img className="product-image" src={`/${product.name}.png`} />
					</div>
					<div className="description-container">
						<h2>Product info</h2>
						<p>
							{ product.description }</p>
						<h3>Price: {product.price} €</h3>
						<button className="add-button">ADD TO BAG</button>
					</div>
				</div>
				</div>
			) : ( <p> Sorry, something went wrong </p> )
			}
		</div>
	);
};

export default ProductDetail;