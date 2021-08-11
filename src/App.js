import logo from './logo.svg';
import './App.css';
import { Turbine, Chart} from './components';

const data = [{name: '10.08', uv: 400, pv: 2400, amt: 10000}, 
            {name: '11.08', uv: 500, pv: 2400, amt: 2400} , {name: '12.08', uv: 600, pv: 2400, amt: 2400}];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Turbine></Turbine>

    </div>
  );
}

export default App;
