import logo from '../logo.svg';
import '../styles/App.scss';
import ListTodo from '../components/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="title">
          Todo app with React Js
        </h2>
        <ListTodo />
      </header>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{toast.success()}
    </div>
  );
}

export default App;
