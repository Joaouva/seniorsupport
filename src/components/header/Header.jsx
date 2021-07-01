import React from "react";

import "./header.styles.scss"

import AppStore from "../../assets/Logos/app-store.svg";
import GooglePlay from "../../assets/Logos/google-play.svg";
import Device1 from "../../assets/header/device 1.png";
import Device2 from "../../assets/header/device 2.png";
import Mockup from "../../assets/header/mockup-principal.png"
import SeniorSupport from "../../assets/Logos/logo.svg";




function Header() {

    return (
		<div className="header">
			<div className="nav-main">
				<div className="nav-left">
					<img src={SeniorSupport} alt="Senior Support logo" />
				</div>
				<div className="nav-right">
					<a href="/">Blog</a>
					<a href="/">Equipa</a>
				</div>
			</div>
			<hr></hr>
			<div className="main">
				<div className="left-section">
					<h1>
						Seu melhor parceiro no cuidado da saúde ao toque
						das mãos
					</h1>
					<p>
						Diminua a distância, organize o dia, aprenda as
						melhores práticas e aumente a sua qualidade de
						vida. Faça o download da app agora mesmo!
					</p>
					<div className="download-app">
						<img src={AppStore} alt="Download on AppStore" />
						<img
							src={GooglePlay}
							alt="Download on GooglePlay"
						/>
					</div>
				</div>
				<div className="right-section">
					<img
						className="mockup"
						src={Mockup}
						alt="Smartphone with the APP"
					/>
				</div>
			</div>
		</div>
    );
}

export default Header;
