import logo from './logo.svg';
import './App.css';
import { Turbines, Chart, WaterBox, WaterPaper, ProductionPaper} from './components';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import { Grid } from '@material-ui/core';


const data = [{name: '10.08', uv: 400, pv: 2400, amt: 10000}, 
            {name: '11.08', uv: 500, pv: 2400, amt: 2400} , {name: '12.08', uv: 600, pv: 2400, amt: 2400}];

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs="6"><Box1/></Grid>
        <Grid item xs="6"><Box2/></Grid>
      </Grid>
      <Turbines/>
    </div>
  );
}

export default App;
