import {LineChart, Line, CartesianGrid, XAxis, YAxis, PolarGrid, Tooltip, ResponsiveContainer} from 'recharts';

const data = [
    {name: '', Guest: 0, User: 0, amt: 0},
    {name: 'Week 1', Guest: 340, User: 400, amt: 2400},
    {name: 'Week 2', Guest: 250, User: 200, amt: 2400},
    {name: 'Week 3', Guest: 500, User: 470, amt: 2400},
    {name: 'Week 4', Guest: 90, User: 100, amt: 2400}

];

const RenderLineChart = ()=>{
    return(
        <ResponsiveContainer width={1090} height={200}>
            <LineChart data={data}>
                <Line strokeWidth={3} dot={false} type="monotone" dataKey="Guest" stroke="#E9A0A0" />
                <Line strokeWidth={3} dot={false} type="monotone" dataKey="User" stroke="#9BDD7C" />
                <CartesianGrid stroke="#ccc" horizontal={true} vertical={false}/>
                <XAxis dataKey="name" />
                <YAxis />
                <YAxis />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>

    )
}
export default RenderLineChart;