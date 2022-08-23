import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListConteiner.scss'
import products from "../../Utils/products.mock"
import { collection , getDocs } from "firebase/firestore"
import db from "../../firebaseConfig"


const ItemListConeiner = ({ section }) => {

    const [listProducts, setListProducts] = useState([])

    const getProducts = async () => {
        const productCollection = collection(db, "products")
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map ((doc) => {
            let product = doc.data()
            product.id = doc.id

            return product
        })
        return productList
    }

    useEffect(() => {
        getProducts()
        .then((res)=> {
            setListProducts(res)
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