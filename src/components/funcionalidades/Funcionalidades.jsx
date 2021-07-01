import React from "react";

import "./funcionalidades.styles.scss"

import Iphone from "../../assets/funcionalidades/iPhone 3.svg"

function Funcionalidades() {
    
    return (
		<div className="funcionalidades-main">
			<div className="funcionalidades-left">
				<img src={Iphone} alt="Iphone with SeniorSupport App" />
			</div>
			<div className="funcionalidades-right">
				<h6>FUNCIONALIDADES!</h6>
				<h4>Uma dashboard com tudo que você precisa saber!</h4>
				<p>
					Veja de uma maneira rápida e prática como está a sua
					saúde. A partir dela você consege ter acesso a todas as
					nossas funcionalidades e recursos.
				</p>
				<hr></hr>
				<h4>
					Tenha um controle sobre as suas atividades ao longo do
					dia!
				</h4>
				<hr></hr>
				<h4>
					Novos conteúdos toda semana para ajudá-lo a manter uma
					vida saudável!
				</h4>
			</div>
		</div>
    );
}

export default Funcionalidades;