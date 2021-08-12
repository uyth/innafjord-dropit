import React, { useState } from 'react';

import { Grid, Slider, Typography, Box } from '@material-ui/core';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';

import apis from '../../api';

function TurbineSlider({id, capacity}) {

    const [value, setValue] = useState(capacity);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSubmit = () => {
        apis.putTurbine(id, value)
    };

    return (
        <div style={{width: "140px"}}>
            <Slider
                min={0}
                max={1}
                step={0.01}
                value={value}
                onChange={handleChange}
                onChangeCommitted={handleSubmit}
            />
            <Box textAlign={"left"}>
                <Typography variant="h4" component="p">{Math.ceil(value*100)} %</Typography>
            </Box>
        </div>
    )
}


export default function Turbine({id, index, capacity}) {
    return (
        <>

            <Grid container spacing={2}>
                <Grid item>
                    <Box display="flex" flexDirection="column">
                        <Typography variant="p">{index}</Typography>
                        <OfflineBoltIcon fontSize="large"/>
                    </Box>
                </Grid>
                <Grid item>
                    <TurbineSlider id={id} capacity={capacity}/>
                </Grid>
            </Grid>
        </>
    )
};