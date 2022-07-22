import './NavBar.scss'
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        <div className='navbar-primary'>
            <h1>Logo</h1>
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>Nosotros</button></li>
                <li><button>Contacto</button></li>
            </ul>
            <CartWidget/>
        </div>
    )
}

export default NavBar