import './App.css';
import { Turbines } from './components';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import { Box, Grid } from '@material-ui/core';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <Grid container xs = "12">
        <Grid item xs = "2">
          <Logo></Logo>
        </Grid>
        <Grid item xs = "3">
          <Box textAlign="left" mt={4}>
             <h1>Innafjord Control Panel</h1>
          </Box>
        </Grid>
      </Grid>
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
