import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    console.log("cartProducts: ", cartProducts)

    const addproductToCart = (product) => {
        //setCartProducts(cartProducts => [...cartProducts, product])
        let isInCart = cartProducts.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            console.log("se agrego el producto:", product)
            setTotalProducts(totalProducts + 1)
            return setCartProducts(cartProducts => [...cartProducts, product])
        }
    }

    const deleteProduct = (product) => {
        console.log("Producto a eliminar:", product)
        setCartProducts(cartProducts.filter( (cartProduct) => cartProduct.id !== product.id) )
    }

    const clear = () => {
        setCartProducts([])
    }

    const data = {
        cartProducts,
        setCartProducts,
        deleteProduct,
        addproductToCart,
        clear,
        totalProducts
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
export { CartContext }