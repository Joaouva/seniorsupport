import React from "react";

import "./parceiros.styles.scss"

import eit from "../../assets/Logos/eit.png";
import UniversidadeAveiro from "../../assets/Logos/universidade de aveiro.png";
import sedy from "../../assets/Logos/sedy.png";
import bgi from "../../assets/Logos/bgi.png";
import Pci from "../../assets/Logos/pci.png";

function Parceiros() {
    return (
		<div className="parceiros-main">
			<div className="parceiros-titulo">
				<h2>E não estamos sozinhos nesta...</h2>
			</div>
			<div className="parceiros-logos">
				<img
					className="logos"
					src={eit}
					alt="Smartphone with the APP"
				/>
				<img
					className="logos"
					src={UniversidadeAveiro}
					alt="Smartphone with the APP"
				/>
				<img
					className="logos"
					src={bgi}
					alt="Smartphone with the APP"
				/>
				<img
					className="logos"
					src={sedy}
					alt="Smartphone with the APP"
				/>
				<img
					className="logos"
					src={Pci}
					alt="Smartphone with the APP"
				/>
			</div>
		</div>
    );
}

export default Parceiros;
