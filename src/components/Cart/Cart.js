import "./Cart.scss";
import ItemListConteiner from "../ItemListConteiner/ItemListConeiner";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Modal from "../Modal/Modal";
import db from '../../firebaseConfig.js'
import { collection, addDoc } from 'firebase/firestore'


const Cart = () => {
    const [showModal, setShowModal] = useState(false)
    const { cartProducts, clear, deleteProduct, totalProducts, totalPrice } = useContext(CartContext)

    const [success, setSuccess] = useState()

    const [order, setOrder] = useState({
        items: cartProducts.map((product) => {
            return {
                id: product.id,
                title: product.title,
                price: product.price
            }
        } ),
        buyer: {},
        date: new Date().toLocaleString(),
        total: totalPrice
    })
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email:''
    })



    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        console.log("order para enviar: ", {...order, buyer: formData})
        pushData({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
        console.log('ORDEN GENERADA', orderDoc)
    }

    return cartProducts === 0 ? (
        <>
            <div className="container">
                <div className="mensajeCompra">
                    <p className="textoMensajeCompra">
                        El carrito esta vacio!, tal vez te interese chusmear algunos de
                        estos productos, Quien sabe por ahí te copa alguno y terminas
                        disfrutando como loco!
                    </p>
                </div>
            </div>
            <ItemListConteiner section="Listado de Productos" />
        </>
    ) : (
        <>
            <div className="container">

                <div>
                    <h5>Detalle del Carrito</h5>
                </div>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Articulo</th>

                            <th>Importe</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartProducts.map((product) => {
                            return (
                                <>


                                    <tr>
                                        <td>
                                            <div className="contenedorCant">
                                                <img src={`/assets/${product.image}`} alt="" width="50px" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="itemNc">

                                                <div className="contenedorDescrip">
                                                    <p className="tituloDesc">{product.title}</p>

                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <div className="contenedorImporte">
                                                <p className="tituloImporte">

                                                    <p>{product.price}</p>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="contenedorCant">
                                                <button onClick={() => deleteProduct(product.id)}>x</button>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            );
                        })}
                    </tbody>
                    <tfoot className="tFooter">
                        <tr>
                            <td colSpan={2} className="derecha">
                                Total
                            </td>
                            <td className="derecha">{totalProducts}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colSpan={1} className="derecha"></td>
                            <td>
                                <Button
                                    onClick={() => clear()}
                                    className="buttonSize"
                                    variant="light"
                                >
                                    Vaciar Carrito
                                </Button>
                            </td>
                            <td>
                                <Link to={`/`}>
                                    <Button className="buttonSize" variant="dark">
                                        Seguir Comprando
                                    </Button>
                                </Link>
                            </td>
                            <td>
                                
                                    <Button
                                     onClick={() => setShowModal(true)}
                                       // onClick={() => clear()}
                                        className="buttonSize"
                                        variant="dark"
                                    >
                                        Terminar Compra
                                    </Button>
                              
                            </td>
                        </tr>
                    </tfoot>
                </Table>
            </div>
            {showModal && 
                    <Modal title="DATOS DE CONTACTO" close={() => setShowModal()}>
                        {success ? (
                            <>
                               <h2>Su orden se genero correctamente</h2>
                               <p>ID de compra : {success}</p>
                            </>
                        ) : (
                            <form onSubmit={submitData}>
                                <input 
                                    type='text' 
                                    name='name' 
                                    placeholder='Ingrese el nombre'
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                                <input 
                                    type='number' 
                                    name='phone' 
                                    placeholder='Ingrese el telefono' 
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <input 
                                    type='email' 
                                    name='email' 
                                    placeholder='Ingrese el mail'
                                    value={formData.email}
                                    onChange={handleChange}

                                />
                                <button type="submit">Enviar</button>
                            </form>
                        )}
                    </Modal>
                }
        </>
    );



}

export default Cart


