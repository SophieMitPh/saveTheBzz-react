import React, { useState, useEffect } from "react";
import './Home.css';

function Home() {
	return (
		<div>
			<div className="pageTitle">
				<h1>Welcome to Save The Bzz!</h1>
			</div>
			<div className="button-container">
				<div className="button-style">
					<a href="products/productOverview">
						<button className="w3-button">Our products</button>
					</a>
				</div>
				<div className="button-style">
					<a href="products/new">
						<button className="w3-button">Add product!</button>
					</a>
				</div>
				<div className="button-style">
					<a href="subscribers/new">
						<button className="w3-button">Subscribe to our newsletter!</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Home;
