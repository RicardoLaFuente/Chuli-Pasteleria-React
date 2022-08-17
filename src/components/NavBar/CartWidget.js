import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import { BsFillCartCheckFill, } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const { cartProducts, clear, deleteProduct, totalProducts } = useContext(CartContext)

    return (
        <>

            <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
                <BsFillCartCheckFill />
                {cartProducts.length !== 0 && <p>{totalProducts}</p>}
            </Button>
            <Overlay target={target.current} show={show} placement="right">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                    <div
                        {...props}
                        style={{
                            position: 'absolute',
                            backgroundColor: 'rgba(255, 100, 100, 0.85)',
                            padding: '2px 10px',
                            color: 'white',
                            borderRadius: 3,
                            ...props.style,
                        }}
                    >

                        <div className='cart-widget'>
                            
                            {console.log("cartProducts desde widget: ", cartProducts)}
                            {cartProducts.map((product) => {
                                return (
                                    <div>
                                        <img src={`/assets/${product.image}`} alt="" width="50px" />
                                        <div>
                                            <p>{product.title}</p>
                                        </div>
                                        <div>
                                            <p>{product.price}</p>
                                        </div>

                                        <p onClick={() => deleteProduct(product)}>Eliminar</p>


                                    </div>
                                )
                            })}
                            <button onClick={() => clear()}>Borrar Todo</button>
                        </div >

                    </div>
                )}
            </Overlay>
        </>
    );
}


export default CartWidget





