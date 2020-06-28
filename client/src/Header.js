import React from 'react';
import './header.css';

function Header() {
	return (
<div>
		<div className="header-rectangle">
    <div className="header-elements">
        <div className="headline">
            <a href="/"><img id="logo" src="logo.png" /></a>
            <h1 id="headerTitle">Save the Bzz!</h1>
        </div>
        <div className="logos">
			<a href="/users/login"><img id="account" src="account.png" /></a>
            <a href="/wishlist"><img id="wishList" src="wishList.png" /></a>
            <a href="/cart"><img id="cart" src="cart.png" /></a>
        </div>
    </div>
</div>
		</div>
);
}

export default Header;