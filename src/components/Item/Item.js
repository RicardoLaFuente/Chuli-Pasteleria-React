import { useState,  } from 'react'
import './Item.scss'


const Item = ({data, action}) => {
    const [contador, setContador] = useState(1)

    const {title, image, price, stock} = data

    const addNumber = () => {
        if (contador < stock) {
        setContador(contador + 1)}
    }
    const removeNumber = () => {
        if (contador > 1){
        setContador(contador - 1)}
    }


    /*useEffect( () => {
        console.log("Actualizacion")
        // setContador(1)
    }, [contador])*/

    return(
        <div className="item-product">
            <div className='float-options'>
                <p>ENVIO GRATIS</p>
                <button></button>
            </div>
            <img src={`/assets/${image}`} alt="Imagen producto" />
            <div className='detail-product'>
                <p>{title}</p>
                <p> 3 Cuotas sin interes</p>
                <p>Envio Gratis Zona San Miguel</p>
                <span>$ {price}</span>
                <p>Stock: {stock}</p>
                <div className='countProd'>
                    <button onClick={removeNumber}>-</button>
                    <p>{contador}</p>
                    <button onClick={addNumber}>+</button>
                </div>
            </div>
        </div> 
    )

    /*return(
        <div className="item-product">
            <div className='float-options'>
                <p>ENVIO GRATIS</p>
                <button><FavoriteBorderIcon /></button>
            </div>
            <img src={`/assets/${image}`} alt="Imagen producto" />
            <div className='detail-product'>
                <p>{title}</p>
                <p><CreditCardIcon /> 3 Cuotas sin interes</p>
                <p><DeliveryDiningIcon />Envio Gratis Zona San Miguel</p>
                <span>$ {price}</span>
                <div className='countProd'>
                    <button onClick={removeNumber}>-</button>
                    <p>{contador}</p>
                    <button onClick={addNumber}>+</button>
                </div>
            </div>
        </div> 
    )*/
}

export default Item