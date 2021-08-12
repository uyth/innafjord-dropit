import { Turbine, Chart, WaterBox, WaterPaper} from '.';

const data = [{name: '10.08', uv: 400, pv: 2400, amt: 10000}, 
            {name: '11.08', uv: 500, pv: 2400, amt: 2400} , {name: '12.08', uv: 600, pv: 2400, amt: 2400}];


function Box1() {
  return (
      <WaterPaper title="MAGASINNIVÅ">
        <Chart data={data}>
        </Chart>
      </WaterPaper>
  );
}

export default Box1;