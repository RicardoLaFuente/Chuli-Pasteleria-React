import ItemDetail from "../ItemDetail/Itemdetail";
import './ItemDetailConteiner.scss'

import products from "../../Utils/products.mock";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailConteiner = () => {
    const [listProducts, setListProducts] = useState([])
    const { id } = useParams()

    const getProducts = (id) => new Promise((resolve, reject) => {
        setTimeout(() => {
            const productDetail = products.find(product => product.id === parseInt(id))
            resolve(productDetail)
        }, 1000)
    })
    useEffect(() => {
        getProducts(id)
            .then((res) => {
                setListProducts(res)
            })
            .catch((error) => {
                console.log("la llama fallo: ", error)
            })
            .finally(() => {
            })
    }, [id])
    return (
        <div className="">

            <ItemDetail data={listProducts} />
            
        </div>
    )
}

export default ItemDetailConteiner