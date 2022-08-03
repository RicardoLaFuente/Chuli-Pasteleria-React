import './ItemDetail.scss'
const ItemDetail = () => {
    return (
        <>
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
                        <button>-</button>
                        <p>{contador}</p>
                        <button>+</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemDetail