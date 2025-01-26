import './App.css';
import Directorio from './Directorio.js';
// import { BrowserRouter as Router, Routes, Route,  } from "react-router"
import { BrowserRouter as Router, Routes, Route, Link, Links } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to={"/Modulos"}/>
        <Routes>
          <Route index element={Directorio.Login()}/>
          <Route path='/Usuarios' element={Directorio.Usuarios()}/>
          <Route path='/BotonesUsuario' element={Directorio.BotonesUsuario()}/>
          <Route path='/CrearUsuario' element={Directorio.CrearUsuario()}/>
          <Route path='/Modulos' element={Directorio.Modulos()}/>
          <Route path='/Ventas' element={Directorio.Ventas()}/>
          <Route path='/Inventario' element={Directorio.Inventario()}/>
          <Route path='/Caja' element={Directorio.Caja()}/>
          <Route path='/Ventas' element={Directorio.Ventas()}/>
          <Route path='/Ventas' element={Directorio.Ventas()}/>
          <Route path='/Ventas' element={Directorio.Ventas()}/>
          <Route path='/Ventas' element={Directorio.Ventas()}/>
          <Route path='/Ventas' element={Directorio.Ventas()}/>
          <Route path='/Ventas' element={Directorio.Ventas()}/>
          <Route path='/Ventas' element={Directorio.Ventas()}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
