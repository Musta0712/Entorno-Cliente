import { useState } from "react";
import './App.css';

function App() {
  const [contador, setContador] = useState(0);

  const titulo = <h1>Mi título</h1>;

  function sum1(x, y) {
    return x + y;
  }

  const calculo = <h2>{sum1(4, 6)}</h2>;

  const sum = () => {
    const a = 5;
    const b = 9;
    const resultado = a + b;
    alert(resultado);
  };

  return (
    <div className="title">
      {titulo}
      {calculo}
      <button onClick={sum}>Botón</button>
      <button onClick={() => setContador(contador + 1)}>Contador: {contador}</button>
    </div>
  );
}

export default App;