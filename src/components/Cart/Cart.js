import "./Cart.scss";
import ItemListConteiner from "../ItemListConteiner/ItemListConeiner";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
    const { cartProducts, clear, deleteProduct, totalProducts, } = useContext(CartContext)

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
                                <Link to={`/terminarcompra`}>
                                    <Button
                                        onClick={() => clear()}
                                        className="buttonSize"
                                        variant="dark"
                                    >
                                        Terminar Compra
                                    </Button>
                                </Link>
                            </td>
                        </tr>
                    </tfoot>
                </Table>
            </div>
        </>
    );



}

export default Cart


