import React from "react";

import "./parceiros.styles.scss"

import eit from "../../assets/Logos/eit.svg";
import UniversidadeAveiro from "../../assets/Logos/universidade de aveiro.svg";
import sedy from "../../assets/Logos/sedy.svg";
import bgi from "../../assets/Logos/bgi.svg";
import Pci from "../../assets/Logos/pci.svg";

function Parceiros() {
    return (
		<div className="parceiros-main">
			<div className="parceiros-titulo">
				<h2>E não estamos sozinhos nesta...</h2>
			</div>
			<div className="parceiros-logos">
				<div>
					<img
						className="logos"
						src={eit}
						alt="Smartphone with the APP"
					/>
				</div>
				<div>
					<img
						className="logos"
						src={UniversidadeAveiro}
						alt="Smartphone with the APP"
					/>
				</div>
				<div>
					<img
						className="logos"
						src={bgi}
						alt="Smartphone with the APP"
					/>
				</div>
				<div>
					<img
						className="logos"
						src={sedy}
						alt="Smartphone with the APP"
					/>
				</div>
				<div>
					<img
						className="logos"
						src={Pci}
						alt="Smartphone with the APP"
					/>
				</div>
			</div>
		</div>
    );
}

export default Parceiros;
