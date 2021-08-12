import React, { useEffect, useState } from 'react';
import { Turbine, Chart, WaterBox, ProductionPaper} from '.';
import {PowerPrice, Money} from './Charts';

//const data = [{name: '10.08', uv: 400, pv: 2400, amt: 10000}, 
  //          {name: '11.08', uv: 500, pv: 2400, amt: 2400} , {name: '12.08', uv: 600, pv: 2400, amt: 2400}];


function Box2() {
  return (
      <ProductionPaper title="Strømpris">
        <PowerPrice/>
        <Money/>
      </ProductionPaper>
  );
}

export default Box2;