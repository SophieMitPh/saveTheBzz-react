import React from 'react';
import '../css/header.css';

function Header() {
	return (
<div>
		<div className="header-rectangle">
    <div className="header-elements">
        <div className="headline">
            <a href="/"><img id="logo" src="/logo.png" alt=""/></a>
            <h1 id="headerTitle">Save the Bzz!</h1>
        </div>
        <div className="logos">
			<a href="/"><img id="account" src="/account.png" alt=""/></a>
            <a href="/"><img id="wishList" src="/wishList.png" alt=""/></a>
            <a href="/"><img id="cart" src="/cart.png" alt=""/></a>
        </div>
    </div>
</div>
		</div>
);
}

export default Header;