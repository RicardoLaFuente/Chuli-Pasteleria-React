import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListConteiner.scss'
import products from "../../Utils/products.mock"


const ItemListConeiner = ({ section }) => {

    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })

    useEffect(() => {
        getProducts
            .then((res) => {
                console.log("Productos: ", res)
                setListProducts(res)
            })
            .catch((error) => {
                console.log("la llama fallo: ", error)
            })
            .finally(() => {
            })
    }, [])




    return (
        <div>
            <h2 className="titulo">{section}</h2>
            <div className='list-products'>
                
                <ItemList dataProducts={listProducts} />
            </div>
        </div>
    )
}
export default ItemListConeiner