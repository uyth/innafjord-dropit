import React, { useEffect, useState } from 'react';

import Turbine from './Turbine';
import apis from '../../api';

import { Grid, Box } from '@material-ui/core';
import { WaterPaper } from '..';

export default function Turbines() {

    const [turbines, setTurbines] = useState([]);

    useEffect(() => {
        async function getTurbines() {
            const res = await apis.getTurbines();
            console.log(res);
            setTurbines(res.data);
        }
        getTurbines();
    }, [])

    return (
        <WaterPaper title={"TURBINER"}>
            <Box p={4} py={2}>                
                <Grid container spacing={2}>
                    {turbines && turbines.map((t, index) => (
                        <Grid item key={t.id}>
                            <Turbine id={t.id} index={index+1} capacity={t.capacityUsage}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </WaterPaper>

    )
};