import React, { useEffect, useState } from 'react';
import { Turbine, Chart, WaterBox, WaterPaper } from '.';
import { WaterInflux, WaterLevel, EnvCost } from './Charts';
import { Box } from '@material-ui/core'
// const data = [{name: '10.08', uv: 400, pv: 2400, amt: 10000}, 
// {name: '11.08', uv: 500, pv: 2400, amt: 2400} , {name: '12.08', uv: 600, pv: 2400, amt: 2400}];


function Box1() {
    return (
        <WaterPaper title="VANNSTAND">
            <Box display="flex" flexDirection="row" justifyContent="center">
                <WaterLevel />
            </Box>
            <Box className="" display="flex" justifyContent="space-evenly" >
                <WaterInflux />
                <EnvCost />
            </Box>

        </WaterPaper>
    );
}

export default Box1;