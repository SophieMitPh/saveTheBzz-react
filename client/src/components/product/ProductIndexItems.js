import React from "react";
import '../../css/cart.css';

function ProductsIndexItems(props) {

	return (
		<tbody>
		<tr key={props.id}>
			<td>
				<a href={`/product/detail/${props.id}`}>
					{props.name}
				</a>
			</td>
			<td>
				{props.description}
			</td>
			<td>
				{props.price} €
			</td>
			<td>
				<a href={`/product/edit/${props.id}`}>
					<button className="edit">Edit</button>
				</a>
			</td>
			<td>
				<a href="#" onClick={props.handleDelete}>
					<img className="bin-subscribers" src="/trash.png" alt="trash icon"/>
				</a>
			</td>
		</tr>
		</tbody>
	);
}

export default ProductsIndexItems;
