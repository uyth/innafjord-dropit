import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Chart} from '../';
import api from '../../api/index.js';
import { Box } from '@material-ui/core';

const PowerPrice = () => {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(async () => {
        const dp = await getPowerPriceData();
        setData([dp]);
    }, []);

    useEffect(() => {

        const timoutId = setTimeout(async ()=> {
            const dp = await getPowerPriceData();
            setData([...data.slice(-10), dp]);
        }, 1000);
        return () => clearTimeout(timoutId);
    }, [data])

    const getPowerPriceData = async () => {
        const res = await api.getPowerPrice();
        console.log(res);
        const powerPrice = Math.ceil(res.data);
        const date= new Date();
        const datetext = date.toTimeString();
        setCurrent(powerPrice);
        return {
            name: datetext.split(" ")[0],
            uv: powerPrice,
            pv: 2400, 
            amt: 2400
        };
    }

  return (
    <Box display="flex" alignContent="center" flexDirection="column">
      <Typography variant="h3">{current} NOK </Typography>
      <Typography variant="h5">Strømpris </Typography>
        <Chart data={data} height={200} width={300} />
    </Box>
 );
}

export default PowerPrice;