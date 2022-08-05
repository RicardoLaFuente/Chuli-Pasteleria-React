import './NavBar.scss'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return(
        <div className='navbar-primary'>
           <Link to="/"> <img src="/assets/logo-chuli.png" alt="logo pasteleria" /></Link>
            <ul>
                <Link to="/"> <li><button>Inicio</button></li></Link>
                <Link to="/productos"><li><button>Productos</button></li></Link>
                <Link to="/nosotros"><li><button>Nosotros</button></li></Link>
                <Link to="/contacto"><li><button>Contacto</button></li></Link>
            </ul>
            <CartWidget />
        </div>
    )
}
export default NavBar