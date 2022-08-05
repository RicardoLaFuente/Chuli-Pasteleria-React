
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConeiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './components/Pages/Inicio';
import Productos from './components/Pages/Productos';
import Nosotros from './components/Pages/Nosotros';
import Contacto from './components/Pages/Contacto';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import Detail from './components/Pages/Detail';
import NavCategory from './components/NavCategory/NavCategory';


function App() {
  return (
    <BrowserRouter>
      <div className="conteiner">
        <NavBar />
        <NavCategory />
        <Routes>
          <Route path='/' element={<Inicio />} />

          <Route path='/productos' element={<Productos />} />
          <Route path='/productos/:id' element={<Detail />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='*' element={<h1>¡ERROR 404 - Pagina no encontrada!</h1>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
