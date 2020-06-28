import React, { useState, useEffect } from "react";
import '../../css/AddProduct.css';
import '../../css/signUp.css';
import productService from './../../services/productService';

const EditProduct = (props) => {
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

	const handleInputChange = event => {
		const { name, value } = event.target;
		setProduct({ ...product, [name]: value })
	};

	const updateProduct = () => {
		productService.update(product.id, product)
			.then(response => {
				console.log(response);
			})
			.catch(e => {
				console.log(e);
			});
	};

	return (
		<div className="background">
			{product ? (
				<div className="data-form">
				<form>
					<h2>Edit product:</h2>
					<label htmlFor="inputName">Name</label>
					<input type="text" name="name" value={product.name} placeholder="Hi" onChange={handleInputChange} autoFocus/>
						<label htmlFor="inputDescription">Description</label>
						<input type="text" name="description" value={product.description}
						       placeholder="Description" onChange={handleInputChange} autoFocus/>
							<label htmlFor="inputPrice">Price</label>
							<input type="text" name="price" value={product.price} placeholder="Enter the new price" onChange={handleInputChange} autoFocus/>
								<button type="submit" onClick={updateProduct}>Update</button>
				</form>
			</div> ) : (
				<p> Something went wrong. We could not find the product. </p>)}
		</div>
	);
};

export default EditProduct;
