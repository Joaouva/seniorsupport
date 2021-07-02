import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "./footer.styles.scss";

import AppStore from "../../assets/Logos/app-store.svg";
import GooglePlay from "../../assets/Logos/google-play.svg";
import Logo from "../../assets/Logos/logo.svg";

function Footer() {

	const formSubmit = () => {
			toast.info("Obrigado pelo seu registo! Entraremos em contacto brevemente", {
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				className: "submit-feedback success",
				toastId: "notifyToast",
			});
	}


	return (
		<div className="footer-main">
			<div className="footer-top">
				<h4>Reserve o seu agora mesmo!</h4>
				<p>
					Informe o seu e-mail para colocarmos na nossa lista de
					espera, assim que tivermos novidades entraremos em
					contato com você por ele, vamos lá?
				</p>
				<form className="form">
					<input
						type="email"
						placeholder="Your email address"
						className="form-input"
					/>
					<input
						type="submit"
						value="Ser premium"
						className="form-button"
						onClick={formSubmit}
					/>
				</form>
				<ToastContainer/>
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
				<div className="footer-logo">
					<img src={Logo} alt="Senior Support Logo" />
				</div>

				<div className="footer-copyright">
					<p>Copyright by Sennior Support</p>
					<p>Todos os direitos reservados. 2021</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
