import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListTodo from './Todo/ListTodo';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />


          {/* <MyComponent /> */}
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/todos">

              <ListTodo />
            </Route>
            <Route path="/about">

              <MyComponent />
            </Route>

            <Route path="/user" exact >

              <ListUser />
            </Route>
            <Route path="/user/:id" >

              <DetailUser />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </Router>
  );
}

export default App;
