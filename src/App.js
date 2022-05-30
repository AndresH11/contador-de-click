import './App.css';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import {useState} from 'react';

function App() {

  const [numClicks,setNumClicks] = useState(0);

  const manejarClick = () =>{

    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () =>{
    
    setNumClicks(0);
  };
  
  return (
    <div className="App">
      <h1 className='App-nombre'>Andrés Henández</h1>
      <div className='contenedor-principal'>
        <Contador 
          numClick = {numClicks}
        />
        <Boton 
          texto ='Click'
          esBotonDeClick = {true}
          manejarClick = {manejarClick}
        />
        <Boton 
          texto ='Reiniciar'
          esBotonDeClick = {false}
          manejarClick = {reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
