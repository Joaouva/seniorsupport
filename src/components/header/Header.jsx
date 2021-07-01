import React from "react";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./header.styles.scss"

import AppStore from "../../assets/Logos/app-store.svg";
import GooglePlay from "../../assets/Logos/google-play.svg";
import Mockup from "../../assets/header/mockup-principal.png"
import SeniorSupport from "../../assets/Logos/logo.svg";
import Brasil from "../../assets/header/br.svg"
import Portugal from "../../assets/header/pt.svg"




function Header() {

    return (
		<div className="header">
			<div className="nav-main">
				<Navbar bg="color-nav" expand="md" className="nav-main">
					<Navbar.Brand href="#home">
						<img
							src={SeniorSupport}
							alt="Senior Support logo"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="#home">Blog</Nav.Link>
							<Nav.Link href="#link">Equipa</Nav.Link>
							<NavDropdown
								title="Idioma"
								id="basic-nav-dropdown"
								className="dropdown"
							>
								<NavDropdown.Item
									href="#action/3.1"
									className="dropdown-item"
								>
									<img
										src={Portugal}
										alt="Bandeira Portugal"
									></img>
									PT
								</NavDropdown.Item>
								<NavDropdown.Item
									href="#action/3.2"
									className="dropdown-item"
								>
									<img
										src={Brasil}
										alt="Bandeira Brasil"
									></img>
									BR
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
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
