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
                    <Link to={`/category/Linea Home`}>
                        Linea Home
                    </Link>
                    <select className='header-select'>
                        <option value='1'>Todos</option>
                        <option value='2'>Linea Home</option>
                        <option value='3'>Linea Spa</option>
                        <option value='4'>Jabones</option>
                        <option value='5'>Cosmetica natural</option>
                        <option value='6'>Almohadillas y antifaces</option>
                        <option value='7'>Esponjas</option>
                    </select>
                </div>
                <div>
                    <CartWidget />
                </div>
            </nav>
        </header>
    );
}
export default NavBar;