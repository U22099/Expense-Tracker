import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type datatype = {[index: string]: string | number}[];

export default function Linechart({data, name , value}: {data: datatype, name: string, value: string}){
    return (
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
            width={500}
            height={300}
            data={data}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={name} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={value} stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
        </ResponsiveContainer>
    );
}
