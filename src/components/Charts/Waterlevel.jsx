import React, { useEffect, useState } from 'react';
import { Chart} from '../';
import api from '../../api/index.js';

const WaterLevel = () => {
    const [data, setData] = useState([]);

    useEffect(async () => {
        const dp = await getWaterLevelData();
        setData([dp]);
    }, []);

    useEffect(() => {

        const timoutId = setTimeout(async ()=> {
            const dp = await getWaterLevelData();
            setData([...data.slice(-10), dp]);
        }, 1000);
        return () => clearTimeout(timoutId);
    }, [data])

    const getWaterLevelData = async () => {
        const res = await api.getGroupState();
        const waterLevel = res.data.waterLevel;
        const date= new Date();
        const datetext = date.toTimeString();

        return {
            name: datetext.split(" ")[0],
            uv: waterLevel,
            pv: 2400, 
            amt: 2400
        };
    }

  return (
        <Chart data={data}/>
 );
}

export default WaterLevel;