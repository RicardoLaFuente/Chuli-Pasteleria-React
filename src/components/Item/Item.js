import { useState, } from 'react'
import './Item.scss'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const Item = ({ data, action }) => {
    const [contador, setContador] = useState(1)
    const { title, image, price, stock, id, } = data


    return (

        <div className="item-product">
            <Link to={`/productos/${id}`}>
                <div className='float-options'>
                    <p>ENVIO GRATIS</p>
                    <button></button>
                </div>
                <img src={`/assets/${image}`} alt="Imagen producto" />
            </Link>
            <div className='detail-product'>
                <p>{title}</p>
                <p> 3 Cuotas sin interes</p>
                <p>Envio Gratis Zona San Miguel</p>
                <span>$ {price}</span>
                <p>Stock: {stock}</p>
                <ItemCount stock={stock} />
            </div>
        </div>

    )


}

export default Item