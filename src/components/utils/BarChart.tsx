import { BarChart, Bar, Rectangle, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type datatype = {[index: string]: string | number}[];

export default function Barchart({data, name , value}: {data: datatype, name: string, value: string}){
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
        >
          <XAxis dataKey={name} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={value} fill="green" activeBar={<Rectangle fill="blue" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
    );
}
