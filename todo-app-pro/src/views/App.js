import logo from "../logo.svg";
import "../styles/App.scss";
import ListTodo from "../components/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../routes/Nav";
import Home from "../components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListUser from "../components/ListUser";
import DetailUser from "../components/DetailUser";
import background from "../assets/images/background.jpg";
import nav_background from "../assets/images/nav_background.jpg";

function App() {
  return (
    <BrowserRouter>
      <div
        className="App"
        style={{
          backgroundImage: `url(${nav_background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <header
          className="App-header"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="title">React Js Basic</h2>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
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
    </BrowserRouter>
  );
}

export default App;
