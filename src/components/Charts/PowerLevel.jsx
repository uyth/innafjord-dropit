import React, { useEffect, useState } from 'react';
import { Chart} from '../';
import api from '../../api/index.js';

const PowerLevel = () => {
    const [data, setData] = useState([]);

    useEffect(async () => {
        const dp = await getTurbineData();
        setData([dp]);
    }, []);

    useEffect(() => {

        const timoutId = setTimeout(async ()=> {
            const dp = await getTurbineData();
            setData([...data.slice(-10), dp]);
        }, 1000);
        return () => clearTimeout(timoutId);
    }, [data])

    const getTurbineData = async () => {
        const res = await api.getTurbines();
        const turbines = res.data;
        let turbineCapacity = turbines.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.capacityUsage
        }, 0);
        const power = turbineCapacity * 69.3;
        console.log(power);
        const date = new Date();
        const datetext = date.toTimeString();

        return {
            name: datetext.split(" ")[0],
            uv: power,
            pv: 2400, 
            amt: 2400
        };
    }

  return (
        <Chart data={data}/>
    );
}

export default PowerLevel;