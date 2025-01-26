class CrearUsuario{
    static Cargar(){
        return(
            <div className="CrearUsuario">
                <div>
                <h1>crea a su usuario</h1>
                <htmlFor action="">
                    <label htmlFor="Usuario">Usuario</label>
                    <input type="mail" name="Usuario" id="Usuario" />

                    <label htmlFor="Contraseña">Contraseña</label>
                    <input type="text" name="Contraseña" id="Contraseña"/>

                    <label htmlFor="UsuarioAdmin">Usuario Administrativo?</label>
                    <input type="checkbox" name="UsuarioAdmin" id="UsuarioAdmin"/>

                    <button>Crear Usuario</button>
                </htmlFor>
                </div>
            </div>
        )
    }
}

export default CrearUsuario