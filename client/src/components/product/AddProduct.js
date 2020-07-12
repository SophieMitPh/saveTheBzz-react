import React, { useState } from "react";
import '../../css/AddProduct.css';
import productService from './../../services/productService';

const AddProduct = (props) => {

	const initialProductState = {
		id: null,
		name: '',
		description: '',
		price: ''
	};

	const [product, setProduct] = useState(initialProductState);

	const handleInputChange = event => {
		const { name, value } = event.target;
		setProduct({ ...product, [name]: value })
	};

	const saveProduct = (e) => {
		e.preventDefault();
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
				console.log(response.data);
			})
			.catch(e => {
				console.log(e);
			});
		props.history.push('/products/index');
	};

	return (
		<div>
		<h2>Add a new product to your webshop!</h2>
			<div className="signUpRectangle">
				<form onSubmit={(e) => saveProduct(e)} className="form-container">
					<input id="nameValue" type="text" value={product.name} onChange={handleInputChange} placeholder="Product Name" name="name" required/>
						<textarea type="text" value={product.description} onChange={handleInputChange} placeholder="Description" name="description" required/>
						<input value={product.price} onChange={handleInputChange} placeholder="Price" name="price" required />
						<button type="submit" id="signup-button">ADD THIS PRODUCT</button>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
