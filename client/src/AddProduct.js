import React, { useState } from "react";
import './AddProduct.css';
import productService from './services/productService';

const AddProduct = () => {

	const initialProductState = {
		id: null,
		name: '',
		description: '',
		price: null
	};

	const [product, setProduct] = useState(initialProductState);
	const [submitted, setSubmitted] = useState(false);

	const handleInputChange = event => {
		const { name, value } = event.target;
		setProduct({ ...product, [name]: value })
	};

	const saveProduct = () => {
		var data = {
			name: product.name,
			description: product.description,
			price: product.price,
		}

		productService.newProduct(data)
			.then(response => {
				setProduct({
					id: response.data.id,
					name: response.data.name,
					description: response.data.description,
					price: response.data.price
				});
				setSubmitted(true);
				console.log(response.data);
			})
			.catch(e => {
				console.log(e);
			});
	};

	const newProduct = () => {
		setProduct(initialProductState);
		setSubmitted(false);
	};

	return (
		<div>
		<h2>Add a new product to your webshop!</h2>
			<div className="signUpRectangle">
				<form className="form-container">
					<input type="text" value={product.name} onChange={handleInputChange} placeholder="Product Name" name="name" required/>
						<textarea type="text" value={product.description} onChange={handleInputChange} placeholder="Description" name="description" required/>
						<input value={product.price} onChange={handleInputChange} placeholder="Price" name="price" required />
						<button type="submit" onClick={saveProduct} id="signup-button">ADD THIS PRODUCT</button>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
