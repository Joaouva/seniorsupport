import React from "react";

import "./novidades.styles.scss"

import learn from "../../assets/Icons/learn.svg"
import appointment from "../../assets/Icons/appointment.svg";
import organize from "../../assets/Icons/organize.svg";
import remember from "../../assets/Icons/remember.svg";
import buy from "../../assets/Icons/buy.svg";


function Novidades() {
    return (
		<div className="novidades-main">
			<div className="novidades-left">
				<h6>NOVIDADES!</h6>
				<h2>
					Tudo isso pensado para você e o seu bem estar{" "}
					<span alt="smile face">😀</span>
				</h2>
				<p>
					Todas as nossas funcionalidades foram feitas para levar
					até os nosso usuários informação e praticidade quando o
					assunto é a sua saúde.
				</p>
			</div>

			<div className="novidades-right">
				<div>
					<div className="novidades-right-item">
						<img
							className="icon"
							src={learn}
							alt="open book"
						/>
						<h3>Aprenda as melhores práticas</h3>
					</div>
					<div className="novidades-right-item">
						<img
							className="icon"
							src={appointment}
							alt="open book"
						/>
						<h3>Agende consultas on-line</h3>
					</div>
				</div>
				<div>
					<div className="novidades-right-item">
						<img
							className="icon"
							src={organize}
							alt="open book"
						/>
						<h3>Organize as tarefas diárias</h3>
					</div>
					<div className="novidades-right-item">
						<img
							className="icon"
							src={remember}
							alt="open book"
						/>
						<h3>Lembre seus medicamentos</h3>
					</div>
					<div className="novidades-right-item">
						<img className="icon" src={buy} alt="open book" />
						<h3>Compre com desconto exclusivo</h3>
					</div>
				</div>
			</div>
		</div>
    );
}

export default Novidades;