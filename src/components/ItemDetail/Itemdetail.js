import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'


const ItemDetail = ({data}) => {
    const {title, image, price, stock, description, category,} = data
    const {id}= useParams()
    const [quantitySelected, setQuantitySelected] = useState (0)
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
                    {console.log("quantitySelected", quantitySelected)}
                    {
                        quantitySelected > 0 ? <Link to="/cart"><button>TERMINAR COMPRA</button></Link> :  <ItemCount stock={stock} setQuantitySelected={setQuantitySelected}/>
                    }
                   
                    
                </div>
            </div>
            <div>
                <p>{description}</p>
            </div>

        </>
    )
}

export default ItemDetail