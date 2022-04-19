import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Intervalo from './components/Intervalo';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux</h1>
      <div className='linha'>
        <Intervalo />
      </div>
      <div className='linha' >
        <Card title='Card #02' green>
          Y
        </Card>
        <Card title='Card #03' blue>
          Z
        </Card>
        <Card title='Card #04' purple>
          A
        </Card>
      </div>
    </div>
  );
}

export default App;
