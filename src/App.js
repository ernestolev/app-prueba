import './App.css';
import { Testimonio } from './componentes/Testimonio.jsx';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
      <h1>Usuarios encontrados en nuestra base de datos:</h1>
      <Testimonio 
        nombre='Ernesto Levano'
        pais='Perú'
        imagen='user'
        cargo='Ing de software'
        empresa='M&M'
        testimonio='Estoy aprendiendo React para iplementarlo a amplify y mejorar mis skills :=)'
      />
      <Testimonio 
        nombre='Tulio Avalos'
        pais='Bolivia'
        imagen='user'
        cargo='Ing de sistemas'
        empresa='M&M'
        testimonio='Estoy aprendiendo React para iplementarlo a amplify y mejorar mis skills :=)'
      />
      </div>
    </div>
  );
}

export default App;
