import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

type datatype = {[index: string]: string | number}[];

export default function Piechart({data, colors , value}: {data: datatype, colors: string[], value: string}){
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart
          width={500}
          height={300}
        >
            <Tooltip />
            <Legend />
            <Pie 
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey={value} 
                label
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
}