import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mar', marks: 20 },
    { name: 'Apr', marks: 40 },
    { name: 'May', marks: 60 },
    { name: 'Jun', marks: 90 },
    { name: 'Jul', marks: 55 },
    { name: 'Aug', marks: 72 },
  ];

function Chart(){
    return<div className="chart">
        <div className="heading">
            <div className="headingText">Student Progress</div>
            <div className="headingDuration">Last 6 Months</div>
        </div>
        <ResponsiveContainer width="100%" aspect={3/1}>
        <LineChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" fontFamily="14px"/>
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="marks" stroke="#41b3a3" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
}

export default Chart;