import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
export default function Chart(props){
    return(
        <LineChart width={600} height={300} data={props.data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      );
}