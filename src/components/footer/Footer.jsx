import React from "react";

import "./footer.styles.scss";

import AppStore from "../../assets/app-store.svg";
import GooglePlay from "../../assets/google-play.svg";
import Logo from "../../assets/Logos/logo.svg"

function Footer() {
    
    return (
		<div className="footer-main">
			<div className="footer-top">
				<h4>Reserve o seu agora mesmo!</h4>
				<p>
					Informe o seu e-mail para colocarmos na nossa lista de
					espera, assim que tivermos novidades entraremos em
					contato com você por ele, vamos lá?
				</p>
			</div>
			<div className="footer-bottom">
				<h2>
					Comece a cuidar da sua saúde, baixe nosso aplicativo!
				</h2>
				<p>
					Rolou até aqui embaixo? Então já deve ter percebido que
					a nossa missão é levar informação e monitorar a sua
					saúde enquanto você curte a sua vida com quem ama.
				</p>
				<div className="app-store-icons">
					<img src={AppStore} alt="Download on AppStore" />
					<img src={GooglePlay} alt="Download on GooglePlay" />
				</div>
			</div>
			<div className="footer-logos">
				<div>
					<img src={Logo} alt="Senior Support Logo" />
				</div>

				<div>
					<p>Copyright by Sennior Support</p>
					<p>Todos os direitos reservados. 2021</p>
				</div>
			</div>
		</div>
    );
}

export default Footer;