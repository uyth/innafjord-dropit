import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ReferenceArea, Label } from 'recharts';
export default function Chart({data, width, height, yRefMax, yRefMin, yMin=-1, yMax=-1, label}){
    const yAxisLabel = <Label value={label} position="top"> </Label>
    
    return(
        <LineChart width={width? width: 600} height={height? height: 300} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name"/>
          {yRefMax && yRefMin &&
            <ReferenceArea y1={yRefMin} y2={yRefMax} />
          }
          {(yMin > -1 && yMax > -1) ? <YAxis label={yAxisLabel} domain={[yMin, yMax]}/> : <YAxis/> }
        </LineChart>
      );
}