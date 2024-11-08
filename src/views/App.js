import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React by MyQuyen ne
        </p>

        <MyComponent />
      </header>
    </div>
  );
}

export default App;
