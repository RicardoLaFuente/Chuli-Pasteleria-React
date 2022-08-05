import ItemListConeiner from "../ItemListConteiner/ItemListConeiner"
import '../NavCategory/NavCategory.scss'
const Inicio = () => {
    return (
        <div>
            <div className="imgInicio">
                <img src={`/assets/imgInicio.jpg`} alt="Imagen producto" width="90%" />
            </div>
            <ItemListConeiner section="CHULI PASTELERIA" />
        </div>
    )
}
export default Inicio
