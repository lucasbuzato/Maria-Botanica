import Navbar from "../Navbar/Navbar";
import {Link} from 'react-router-dom'

function Header() {
    return ( 
        <header className="flex flex-row justify-between items-center text-white bg-Verde" >
            <nav className="flex flex-row justify-center items-center p-5">
                <div>
                <img src="/src/Componentes/img/logo smt yann.png" alt="" />
                </div>
            <ul className="flex flex-row  p-2">
                <li className="text-lg p-2 font-bold"><Link to="/">Home</Link></li>
                <li className="text-lg p-2 font-bold"><Link to="filmes">MarketPlace</Link></li>
                <li className="text-lg p-2 font-bold"><Link to="filmes">Salvia.ia</Link></li>
            </ul>
        </nav>
            <Navbar></Navbar>
        </header>
     );
}

export default Header;