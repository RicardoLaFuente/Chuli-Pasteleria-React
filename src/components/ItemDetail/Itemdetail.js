import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { useParams } from 'react-router-dom'

const ItemDetail = ({data}) => {
    const {title, image, price, stock, description, category,} = data
    const {id}= useParams()
    return (
        <>
            <h1>{category}</h1>
           <div className="item-product">
                <img src={`/assets/${image}`} alt="Imagen producto" />
                <div className='detail-product'>
                    <p>{title}</p>
                    <p> 3 Cuotas sin interes</p>
                    <p>Envio Gratis Zona San Miguel</p>
                    <span>$ {price}</span>
                    <ItemCount stock={stock}/>
                    <button>Comprar</button>
                </div>
            </div>
            <div>
                <p>{description}</p>
            </div>

        </>
    )
}

export default ItemDetail