import logo from '../logo.svg';
import '../styles/App.css';
import '../components/ComponentBasic';
// import ComponentBasic from '../components/ComponentBasic';
import ComponentForm from '../components/ComponentForm';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {/* <ComponentBasic /> */}
       <ComponentForm/>
      </header>
    </div>
  );
}

export default App;
