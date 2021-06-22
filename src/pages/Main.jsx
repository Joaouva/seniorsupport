import React from "react";
import Feedbacks from "../components/feedbacks/Feedbacks";
import Funcionalidades from "../components/funcionalidades/Funcionalidades";
import Premium from "../components/premium/Premium"
import Footer from "../components/footer/Footer"

import Header from "../components/header/Header";
import Novidades from "../components/novidades/Novidades";
import Parceiros from "../components/parceiros/Parceiros";

function Main() {
	return (
		<div>
			<Header />
			<Parceiros />
			<Novidades />
			<Funcionalidades />
			<Feedbacks />
			<Premium />
			<Footer/>
		</div>
	);
}

export default Main;
