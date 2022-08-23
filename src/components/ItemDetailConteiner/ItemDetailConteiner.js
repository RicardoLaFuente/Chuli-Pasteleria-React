import ItemDetail from "../ItemDetail/Itemdetail";
import './ItemDetailConteiner.scss'

import products from "../../Utils/products.mock";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
//Firebase
import db from "../../firebaseConfig"
import { doc, getDoc } from "firebase/firestore"

const ItemDetailConteiner = () => {
    const [productData, setProductData] = useState({})
    const { id } = useParams()

    useEffect( () => {
        getProduct(id)
        .then((res) => {
            setProductData(res)
        })
    }, [id])

    
    const getProduct = async () => {
        const docRef = doc(db, 'products', id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        console.log('data con id:', product)
        return product
    }


    return (
        <div className="">

            <ItemDetail data={productData} />
            
        </div>
    )
  
}

export default ItemDetailConteiner