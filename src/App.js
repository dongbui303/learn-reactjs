import logo from './logo.svg';
import './App.css';

function App() {
  const name ="Dong";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>xin chao {name}</h2>
      </header>
    </div>
  );
}

export default App;
