import React from "react";

import "./header.styles.scss"

import AppStore from "../../assets/app-store.png";
import GooglePlay from "../../assets/google-play.png";
import Device1 from "../../assets/device 1.png";
import Device2 from "../../assets/device 2.png";
import NavBar from "../navbar/NavBar";



function Header() {

    return (
		<div>
			<NavBar />
			<div className="main">
				<div className="left-section">
					<h1>
						O melhor parceiro no cuidado da saúde ao toque das
						mãos
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
						className="device2"
						src={Device2}
						alt="Smartphone with the APP"
					/>
					<img
						className="device1"
						src={Device1}
						alt="Smartphone with the APP"
					/>
				</div>
			</div>
		</div>
    );
}

export default Header;
