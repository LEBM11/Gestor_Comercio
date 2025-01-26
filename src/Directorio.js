import Caja from "./Modulos/Caja/Caja/Caja.js"
import Inventario from "./Modulos/Inventario/Inventario/Inventario.js"
import BotonesUsuario from "./Modulos/Login/Botones Usuario/BotonesUsuario/BotonesUsuario.js"
import CrearUsuario from "./Modulos/Login/CrearUsuario/CrearUsuario.js"
import Login from "./Modulos/Login/Login/Login.js"
import Usuarios from "./Modulos/Login/Usuarios/Usuarios.js"
import Modulos from "./Modulos/Modulos/Modulos.js"
import Ventas from "./Modulos/Ventas/Ventas/Ventas.js"

class Directorio{
    
    static Login = () => {return Login()}
    static Usuarios = () => {return Usuarios.Cargar()}
    static BotonesUsuario = () => {return BotonesUsuario.Cargar()}
    static CrearUsuario = () => {return CrearUsuario.Cargar()}
    static Modulos = () => {return Modulos.Cargar()}
    static Ventas = () => {return Ventas.Cargar()}
    static Inventario = () => {return Inventario.Cargar()}
    static Caja = () => {return Caja.Cargar()}

}

export default Directorio