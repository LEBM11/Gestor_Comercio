import { useNavigate } from "react-router-dom"
import "./Login.css"

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/Modulos");
    };

    return (
        <div id="Login">
        <h1>Conéctese a su usuario</h1>
        <form>
            <label htmlFor="Usuario">Usuario</label>
            <input type="email" name="Usuario" id="Usuario" />

            <label htmlFor="Contraseña">Contraseña</label>
            <input type="password" name="Contraseña" id="Contraseña" />

            <label htmlFor="MantenerConectado">
            Mantener sesión iniciada
            </label>
            <input type="checkbox" name="MantenerConectado" id="MantenerConectado" />

            <button type="button" onClick={handleLogin}>
            Iniciar sesión
            </button>
        </form>
        </div>
    );
}

export default Login