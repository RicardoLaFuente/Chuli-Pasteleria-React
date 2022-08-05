import { Link } from 'react-router-dom'

const NavCategory = () => {
    return (
        <div>
            <ul>
                <Link to="/productos"><li><button>Box</button></li></Link>
                <Link to="/productos"><li><button>Tortas</button></li></Link>
            </ul>
        </div>
    )
}
export default NavCategory