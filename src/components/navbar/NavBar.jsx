import React from "react"

import "./navbar-styles.scss"

import SeniorSupport from "../../assets/Logos/logo.png";


function NavBar() {
    
    return (
		<div className="nav-main">
			<div className="nav-left">
				<img src={SeniorSupport} alt="Senior Support logo" />
			</div>
			<div className="nav-right">
				<a href="/">Blog</a>
				<a href="/">Equipa</a>
			</div>
			<hr></hr>
		</div>
    );
}

export default NavBar;