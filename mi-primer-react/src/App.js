import './App.css';

function App() {
  const titulo = <h1>Mi título</h1>
  const calculo = <h2>{sum(4,6)}</h2>;
  return <div className='title'>{titulo}{calculo}</div>

  function sum(x, y) {
    return x + y;
  }
}

export default App;