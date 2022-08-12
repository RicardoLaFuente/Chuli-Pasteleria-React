import './ItemCount.scss'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemCount = ({ stock, setQuantitySelected, productData }) => {
     const { addproductToCart } = useContext(CartContext)

     let stockVirtual = stock
     let disable = false
     const [count, setCount] = useState(1)
     const addProduct = () => count < stockVirtual ? setCount(count + 1) : disable = true
     const removeProduct = () => count > 1 ? setCount(count - 1) : disable = true
     const onAdd = () => {
          
          addproductToCart(productData)
          setQuantitySelected (count)
     }

     return (
          <>
               <div className='countProd'>
                    <button onClick={removeProduct} disabled={disable}>-</button>
                    <p>{count}</p>
                    <button onClick={addProduct} disabled={disable}>+</button>
               </div>
               <button onClick={onAdd}>AGREGAR AL CARRITO</button>
          </>
     )
}

export default ItemCount
