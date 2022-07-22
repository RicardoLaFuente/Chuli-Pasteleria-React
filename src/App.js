
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConeiner';

function App() {
  return (
    <div className="conteiner">
      <NavBar />
      <div>
        <ItemListConteiner section="CHULI PASTELERIA"/>
      </div>
    </div>
  );
}

export default App;
