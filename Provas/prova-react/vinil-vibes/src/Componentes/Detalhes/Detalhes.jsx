import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './Detalhes.css';

const Detalhes = () => {
    const { id } = useParams();
    const [disco, setDisco] = useState(null);
    const [error, setError] = useState(null);
    const [foto, setFoto] = useState(0);
    const [numero, setNumero] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:3000/discos/${id}`)
            .then(response => {
                if (!response.ok) throw new Error(`Produto não encontrado (Status: ${response.status})`);
                return response.json();
            })
            .then(data => {
                setDisco(data);
                setError(null);
            })
            .catch(err => setError(err.message));
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!disco) return <p>Carregando...</p>;

    const fotoAnterior = () => {
        setFoto((i) =>
            i === 0 ? disco.imagens.length - 1 : i - 1
        );
    };

    const proximaFoto = () => {
        setFoto((i) =>
            i === disco.imagens.length - 1 ? 0 : i + 1
        );
    };

    const proximaNumero = () => setNumero(i => i + 1);

    const numeroAnterior = () => setNumero(i => Math.max(i - 1, 1));

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

            <div className="detalhes">

                <h2 className="texto3">{disco.nome}</h2>

                <div className="info">

                    <div className="pri">

                        <div className="carrossel">

                            {disco.imagens && disco.imagens.length > 0 ? (
                                <div className="c">
                                    <button className="seta" onClick={fotoAnterior}>❮</button>
                                    <img
                                        src={disco.imagens[foto]}
                                        alt={`${disco.nome} - foto ${foto + 1}`}
                                    />
                                    <button className="seta" onClick={proximaFoto}>❯</button>
                                </div>
                            ) : (
                                <p>Imagem não disponível</p>
                            )}

                        </div>

                        <div>
                            <p id='preco2'>{disco.preco}</p>

                            <div id="linha">

                                <div className="quantidade">
                                    <button className="numero" onClick={numeroAnterior}>-</button>
                                    <p>{numero}</p>
                                    <button className="numero" onClick={proximaNumero}>+</button>
                                </div>

                                <button id="botao">Comprar</button>

                            </div>

                        </div>

                    </div>

                    <p id="descri">{disco.descricao}</p>

                    <div id="lista">

                        <p id="ptl">Tracklist:</p>
                        <ul id="tl">

                            {disco.tracklist && disco.tracklist.length > 0 ? (
                                disco.tracklist.map((faixa, index) => (
                                    <li key={index}> - {faixa}</li>
                                ))
                            ) : (
                                <li>Tracklist não disponível</li>
                            )}
                        </ul>

                    </div>

                </div>

                <div className="tabela">
                    <table className="table is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <th>Informações do produto</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Artista</th>
                                <td>{disco.detalhes[0]}</td>
                            </tr>
                            <tr>
                                <th>Dimensões do produto</th>
                                <td>{disco.detalhes[1]}</td>
                            </tr>
                            <tr>
                                <th>ASIN</th>
                                <td>{disco.detalhes[2]}</td>
                            </tr>
                            <tr>
                                <th>Condição</th>
                                <td>{disco.detalhes[3]}</td>
                            </tr>
                            <tr>
                                <th>Estilo</th>
                                <td>{disco.detalhes[4]}</td>
                            </tr>
                            <tr>
                                <th>Gravadora</th>
                                <td>{disco.detalhes[5]}</td>
                            </tr>
                            <tr>
                                <th>Data de lançamento</th>
                                <td>{disco.detalhes[6]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>



            </div>
        </>
    );
};

export default Detalhes;







