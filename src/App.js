import './App.css';
import RecipeTitle from './RecipeTitle';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes} from "react-router-dom";
import Rotas from './Rotas';
import BasicExample from './BasicExample';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <div>
      <BasicExample/>

<Rotas/>

            
    </div>
  );
}

export default App;
