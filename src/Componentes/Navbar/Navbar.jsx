import {Link} from 'react-router-dom'
function Navbar() {
    return ( 
        <>
        <nav>
            <ul className='flex flex-row p-2 mr-2'>
                <li className="text-lg p-2 font-bold"><Link to="/">Login</Link></li>
                <li className="text-lg p-2 font-bold"><Link to="filmes">Registrar</Link></li>
            </ul>
        </nav>
        
        </>
     );
}

export default Navbar;