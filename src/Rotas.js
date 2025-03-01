import React from 'react'
import { Route, BrowserRouter, Routes} from "react-router-dom";
import Usuario from './Usuario';
import Sobre from './Sobre';
import Home from './Home';


function Rotas() {
  return (
    <div>       <BrowserRouter>
    <Routes>

<Route path="/" element={<Home/>} />
<Route path="/Usuario" element={<Usuario/>} />
<Route path="/Sobre" element={<Sobre/>} />
</Routes>

</BrowserRouter>
</div>
  )
}

export default Rotas