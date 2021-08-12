import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Chart} from '../';
import api from '../../api/index.js';
import { Box } from '@material-ui/core';
const EnvCost = () => {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(async () => {
        const dp = await getEnvCostData();
        setData([dp]);
    }, []);

    useEffect(() => {

        const timoutId = setTimeout(async ()=> {
            const dp = await getEnvCostData();
            setData([...data.slice(-10), dp]);
        }, 1000);
        return () => clearTimeout(timoutId);
    }, [data])

    const getEnvCostData = async () => {
        const res = await api.getGroupState();
        console.log(res);
        const envCost = Math.ceil(res.data.environmentCost);
        const date= new Date();
        const datetext = date.toTimeString();
        setCurrent(envCost);
        return {
            name: datetext.split(" ")[0],
            uv: envCost,
            pv: 2400, 
            amt: 2400
        };
    }

  return (
      <>
      <Box display="flex" alignContent="center" flexDirection="column">
      <Typography variant="h3">{current} NOK </Typography>
      <Typography variant="h5">Miljøkostnad </Typography>
        <Chart height={200} width={300} data={data}/>
      </Box>
      
        </>
 );
}

export default EnvCost;