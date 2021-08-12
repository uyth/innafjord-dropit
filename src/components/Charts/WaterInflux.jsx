import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Chart} from '../';
import api from '../../api/index.js';
import { Box } from '@material-ui/core';
const WaterInflux = () => {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(async () => {
        const dp = await getWaterInfluxData();
        setData([dp]);
    }, []);

    useEffect(() => {

        const timoutId = setTimeout(async ()=> {
            const dp = await getWaterInfluxData();
            setData([...data.slice(-10), dp]);
        }, 1000);
        return () => clearTimeout(timoutId);
    }, [data])

    const getWaterInfluxData = async () => {
        const res = await api.getWaterInflux();
        console.log(res);
        const waterInflux = Math.ceil(res.data);
        const date= new Date();
        const datetext = date.toTimeString();
        setCurrent(waterInflux);
        return {
            name: datetext.split(" ")[0],
            uv: waterInflux,
            pv: 2400, 
            amt: 2400
        };
    }

  return (
      <>
        <Box display="flex" alignContent="center" flexDirection="column">
            <Typography variant="h3">{current} m^3/s</Typography>
            <Typography variant="h5"> Vanntilførsel</Typography>
            <Chart height={200} width={300} data={data}/>
        </Box>
        </>
        
 );
}

export default WaterInflux;