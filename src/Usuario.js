import React from 'react'
import { Link } from 'react-router-dom';

function Usuario() {
  return (
    <div><h1>Sobre</h1>
    <Link to="/">retornar a página inicial</Link>
    <button onClick={()=> {alert('fui clicado!')}} > Botão</button>
</div>
  )
}

export default Usuario