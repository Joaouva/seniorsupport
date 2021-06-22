import React from "react";

import "./premium.styles.scss";

import Mockup from "../../assets/premium.png";
import CheckIcon from "../../assets/Icons/check-icon.png";

function Premium() {
	return (
		<div className="premium-main">
			<div className="premium-left">
				<img
					src={Mockup}
					alt="Iphone and watch with the premium app features"
				/>
			</div>
			<div className="premium-right">
				<h6>FUNÇÕES EXCLUSIVAS!</h6>
				<h2>Seja um usuário Premium 🤑</h2>
				<p>
					Integre o relógio inteligente de saúde e a
					monitorização de segurança.
				</p>
				<div className="premium-list-item">
					<div>
						<img src={CheckIcon} alt="Check icon" />
					</div>
					<div>
						<h5>Monitore sinais vitais</h5>
					</div>
				</div>
				<div className="premium-list-item">
					<div>
						<img src={CheckIcon} alt="Check icon" />
					</div>
					<div>
						<h5>Alerta de quedas</h5>
					</div>
				</div>
				<div className="premium-list-item">
					<div>
						<img src={CheckIcon} alt="Check icon" />
					</div>
					<div>
						<h5>Comunicador</h5>
					</div>
				</div>
				<div className="premium-list-item">
					<div>
						<img src={CheckIcon} alt="Check icon" />
					</div>
					<div>
						<h5>Geo-localizador</h5>
					</div>
				</div>
				<div className="premium-list-item">
					<div>
						<img src={CheckIcon} alt="Check icon" />
					</div>
					<div>
						<h5>Apoio 24/7 automatizado</h5>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Premium;
