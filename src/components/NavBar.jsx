import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.scss'


const NavBar = () => {

    
    return (
        <header className='header'>
            <nav className='nav'>
                <Link to="/" className='header-link'>
                    <div className='header-logo'>
                        La Vie Est Belle
                    </div>
                </Link>
                <div className='content-select'>
                    <div className="dropdown">
                        <span>Filtro por categoría</span>
                        <div className="dropdown-content">
                            <Link to={`/`} className="dropdown-item">Todos</Link>
                            <Link to={`/category/${"Linea Home"}`} className="dropdown-item" >Linea Home</Link>
                            <Link to={`/category/${"Linea Spa"}`} className="dropdown-item" >Linea Spa</Link>
                            <Link to={`/category/${"Jabones"}`} className="dropdown-item" >Jabones</Link>
                            <Link to={`/category/${"Cosmetica Natural"}`} className="dropdown-item" >Cosmetica Natural</Link>
                            <Link to={`/category/${"Almohadillas y Antifaces"}`} className="dropdown-item" >Almohadillas y Antifaces</Link>
                            <Link to={`/category/${"Esponjas"}`} className="dropdown-item" >Esponjas</Link>
                        </div>
                    </div>                    
                </div>
                <div>
                    <CartWidget />
                </div>
            </nav>
        </header>
    );
}
export default NavBar;