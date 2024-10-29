import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './Formulario.css';

const Cadastro = () => {
  const [form, setForm] = useState({
    nome: '',
    email: ''
  });
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://63069afec0d0f2b8011f9944.mockapi.io/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao realizar o cadastro.');
      };

      const data = await response.json();
      setMensagem('Cadastro realizado com sucesso!');
      setErro('');
      setForm({ nome: '', email: '' });
    } catch (err) {
      setErro('Erro ao realizar o cadastro. Tente novamente.');
      setMensagem('');
    };
  };

  return (
    <>
      <div className='sobre'>
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


        <form onSubmit={handleSubmit}>
          <h2 className='texto2'>Se cadastre para receber nossas promoções!</h2>
          <div className='campos'>
            <label className='texto2'>
              Nome:
              <input type="text" className="input is-success" name="nome" placeholder='Nome' value={form.nome} onChange={handleChange} required />
            </label>
            <label className='texto2'>
              Email:
              <input type="email" className="input is-success" name="email" placeholder='Email' value={form.email} onChange={handleChange} required />
            </label>

            <label className="checkbox">
              <input type="checkbox" required />
              I agree to the <a href="#">terms and conditions</a>
            </label>
            <button id='enviar' className="button" type="submit">Enviar</button>
          </div>
        </form>

        {mensagem && <p>{mensagem}</p>}
        {erro && <p>{erro}</p>}
      </div>
    </>
  );
};

export default Cadastro;