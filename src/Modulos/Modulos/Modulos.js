import Directorio from "../../Directorio.js"
import "./Modulos.css"

class Modulos {
    static Cargar(){
        return(
            <div id="Modulos">
                {Directorio.Usuarios()}
                {Directorio.Ventas()}
                {Directorio.Inventario()}
                {Directorio.Caja()}
            </div>
        )
    }
}

export default Modulos