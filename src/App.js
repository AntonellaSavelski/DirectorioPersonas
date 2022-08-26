
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import Home from "./screens/Home"; 
import Estadisticas from "./screens/Estadisticas"; 
import Contacto from "./screens/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}></Route>
        <Route index element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Estadisticas" element={<Estadisticas />}></Route>
        <Route path="/Contacto" element={<Contacto />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
