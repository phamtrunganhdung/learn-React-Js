import logo from '../logo.svg';
import '../styles/App.css';
import ComponentBasic from '../components/ComponentBasic';
import ComponentForm from '../components/ComponentForm';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentBasic />
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentForm />
      </header>
    </div>
  );
}

export default App;
