import React from "react";
import './cart.css';

function ProductsIndexItems(props) {

	return (
		<tbody>
		<tr key={props.id}>
			<td>
				<a href="#">
					{props.name}
				</a>
			</td>
			<td>
				{props.description}
			</td>
			<td>
				<a href={`product/edit/${props.id}`}>
					<button className="edit">Edit</button>
				</a>
			</td>
			<td>
				<a href="#" onClick={props.handleDelete}>
					<img className="bin-subscribers" src="/trash.png"/>
				</a>
			</td>
		</tr>
		</tbody>
	);
}

export default ProductsIndexItems;
