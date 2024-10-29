import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './Vitrine.css';
import fetchDiscos from '../../module/Modulo';

const Vitrine = () => {
  const [discos, setDiscos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    obterDiscos();
  }, []);

  const obterDiscos = async () => {
    
    try {
      const discosObtidos = await fetchDiscos();
      setDiscos(discosObtidos);
      setLoading(false);

    } catch (err) {
      setError('Erro ao carregar produtos. Tente novamente mais tarde.');
      setLoading(false);
      
    }
  };

  const irParaDetalhes = (id) => {
    navigate(`/detalhes/${id}`);
  };




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

      <div className="vitrine">
        <h2 className="texto4">Nossos Vinis</h2>
        <div className="disco-grid">
          {loading ? (
            <p>Carregando produtos...</p>
          ) : error ? (
            <p style={{ color: 'red' }}>{error}</p>
          ) : (
            discos.map((disco) => (
              <div key={disco.id} className="card" onClick={() => irParaDetalhes(disco.id)}>
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img id="imd"
                      src={disco.imagens[0]}
                      alt={disco.nome}
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title">{disco.nome}</p>
                      <p className="subtitle">{disco.detalhes[0]}</p>
                    </div>
                  </div>
                  <div className="content">
                    <p id="preco">{disco.preco}</p>
                    <button id="d">Ver detalhes</button>
                    <br />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Vitrine;

