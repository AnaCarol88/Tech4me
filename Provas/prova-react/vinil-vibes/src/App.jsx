
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Vitrine from './Componentes/Vitrine/Vitrine.jsx';
import Sobre from './Componentes/Sobre/Sobre.jsx';
import Inicio from './Componentes/Pagina-inicial/Inicial.jsx';
import Detalhes from './Componentes/Detalhes/Detalhes.jsx';
import Cadastro from './Componentes/Formulario/Formulario.jsx';

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/vitrine" element={<Vitrine />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/detalhes/:id" element={<Detalhes />} />
    </Routes>

  );
};

export default App;


