import './App.css';
import { Turbines } from './components';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import { Grid } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <Grid container xs="12">
        <Grid item xs="6">
          <Box1/>
        </Grid>
        <Grid item xs="6">
          <Box2/>
        </Grid>
      </Grid>
      <Grid item xs="12">
        <Turbines/>
      </Grid>
    </div>
  );
}

export default App;
