import logo from '../logo.svg';
import '../styles/App.scss';
import BasicComponent from '../components/BasicComponent';
import FormComponent from '../components/FormComponent';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BasicComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <FormComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <span>github.com/phamtrunganhdung</span>
      </header>
    </div>
  );
}

export default App;
