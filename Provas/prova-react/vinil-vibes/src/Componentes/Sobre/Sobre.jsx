import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './Sobre.css';
import Foto from './foto.png';


const Sobre = () => {

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
                <button className="navbar-link" id='mais'>
                  Mais
                </button>
              </Link>
              <div className="navbar-dropdown">
                <Link to="/sobre">
                  <button className="navbar-item" id='sobre'>
                    Sobre
                  </button>
                </Link>
                <Link to="/cadastro">
                  <button className="navbar-item" id='cads'>
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

      <div className="sobre">

        <h2 className='texto1'>Sobre o Projeto</h2>
        
        <div className='conteudo'>
          <img src={Foto} alt="Minha Foto" id='img2' />
          <p className='texto1' id='t'>Seu projeto é um e-commerce de vinis, desenvolvido como parte de sua jornada de aprendizado em front-end. Durante esse processo, você utilizou tecnologias como React para construir a interface interativa, Vite como ferramenta de desenvolvimento rápida e moderna, além de uma API Mock para simular o backend, proporcionando uma experiência realista de integração entre front-end e dados externos. Essa trajetória envolve consolidar conceitos de design de interface, gerenciamento de estados e roteamento, além de boas práticas em JavaScript moderno.</p>
        </div>

      </div>
    </>
  );
};

export default Sobre;