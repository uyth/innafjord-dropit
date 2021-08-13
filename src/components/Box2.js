import React, { useEffect, useState } from 'react';
import { Turbine, Chart, WaterBox, ProductionPaper } from '.';
import { PowerPrice, Money, PowerLevel } from './Charts';
import { Box } from '@material-ui/core';


function Box2() {
  return (
      <ProductionPaper title="Strøm Produsert">
        <Box display="flex" flexDirection="row" justifyContent="center">
          <PowerLevel/>
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <Money/>
          <PowerPrice/>
        </Box>
      </ProductionPaper>
  );
}

export default Box2;