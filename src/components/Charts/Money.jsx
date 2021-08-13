import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { Chart} from '../';
import api from '../../api/index.js';
import { Box } from '@material-ui/core';

const Money = () => {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(async () => {
        const dp = await getmoneyData();
        setData([dp]);
    }, []);

    useEffect(() => {

        const timoutId = setTimeout(async ()=> {
            const dp = await getmoneyData();
            setData([...data.slice(-10), dp]);
        }, 1000);
        return () => clearTimeout(timoutId);
    }, [data])

    const getmoneyData = async () => {
        const res = await api.getGroupState();
        console.log(res);
        const money = Math.ceil(res.data.money);
        const date= new Date();
        const datetext = date.toTimeString();
        setCurrent(money);
        return {
            name: datetext.split(" ")[0],
            uv: money,
            pv: 2400, 
            amt: 2400
        };
    }

  return (
    <Box display="flex" alignItems="center">
        <Typography variant="h5">Dagens inntekt: {current} NOK</Typography>    
    </Box>
 );
}

export default Money;