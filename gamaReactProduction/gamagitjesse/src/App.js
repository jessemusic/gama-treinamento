import React, { useState } from 'react';


function App(props) {
  const [ usuario, setUsuario ] = useState('Jesse');
  return (
    <>
    <p>{ usuario } </p>
    <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuário"  />
    </>
  );
}

export default App;
