import { Link } from 'react-router-dom';
import React from "react";
import 'bulma/css/bulma.css';
import './inicial.css';
import Logo from './Vinil-&-Vibes.png';

const Inicio = () => {

    return (
        <>
            <nav className="navbar " role="navigation" aria-label="main navigation">

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/">
                            <button className="navbar-item">
                                Home
                            </button>
                        </Link>
                        <Link to="/vitrine">
                            <button className="navbar-item ">
                                Discos
                            </button>
                        </Link>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <Link>
                                <button className="navbar-link" id="mais">
                                    Mais
                                </button>
                            </Link>
                            <div className="navbar-dropdown">
                                <Link to="/sobre">
                                    <button className="navbar-item" id="sobre">
                                        Sobre
                                    </button>
                                </Link>
                                <Link to="/cadastro">
                                    <button className="navbar-item" id="cads">
                                        Cadastre-se
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Link to="/">
                                <button className="navbar-item" id="titulo">
                                    Vinil & VIbes
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>

            </nav>

            <div className="conteudo">
                <img className='img1' src={Logo} alt="Logo Vinil & Vibes" />
                <div className="texto">

                    <p>
                        Estamos felizes em tê-lo aqui em nossa loja online, dedicada a todos os amantes do vinil. Aqui, você encontrará uma seleção incrível de discos que celebram a música em sua forma mais autêntica.

                        <br />A nossa missão é proporcionar uma experiência única e nostálgica, celebrando a arte do vinil e a conexão emocional que ele traz. Cada disco é cuidadosamente selecionado, garantindo qualidade sonora e estética, além de disponibilizarmos edições limitadas e especiais para colecionadores.

                        <br />Na Vinil e Vibes, acreditamos que a música é uma forma de expressão que deve ser apreciada em sua plenitude. Navegue pelo nosso catálogo, descubra novos artistas e redescubra suas músicas favoritas em formato físico. Junte-se à nossa comunidade de apaixonados por vinil e traga as vibrações da música para a sua casa!
                    </p>

                </div>
            </div>

        </>
    );
};

export default Inicio;
