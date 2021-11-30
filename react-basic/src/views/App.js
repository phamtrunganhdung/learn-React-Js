import logo from '../logo.svg';
import '../styles/App.css';
import '../components/ComponentHello';
import ComponentHello from '../components/ComponentHello';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentHello />
      </header>
    </div>
  );
}

export default App;
