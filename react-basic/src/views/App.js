import logo from '../logo.svg';
import '../styles/App.css';
import '../components/ComponentBasic';
// import ComponentBasic from '../components/ComponentBasic';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {/* <ComponentBasic /> */}
      </header>
    </div>
  );
}

export default App;
