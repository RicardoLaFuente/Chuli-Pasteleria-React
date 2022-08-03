import ItemDetail from "../ItemDetail/Itemdetail";
import products from "../../Utils/productoDetail.mock"

const ItemDetailConteiner = () => {
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
    return(
        <div className="">
            <ItemDetail />
        </div>
    )
}

export default ItemDetailConteiner