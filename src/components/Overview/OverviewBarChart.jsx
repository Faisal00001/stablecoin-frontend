import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        Checking: 4000,
        Treasury: 2400,
        Vault: 2400,
    },
    {
        name: 'Page B',
        Checking: 3000,
        Treasury: 1398,
        Vault: 2210,
    },
    {
        name: 'Page C',
        Checking: 2000,
        Treasury: 9800,
        Vault: 2290,
    },
    {
        name: 'Page D',
        Checking: 2780,
        Treasury: 3908,
        Vault: 2000,
    },
    {
        name: 'Page E',
        Checking: 1890,
        Treasury: 4800,
        Vault: 2181,
    },

];

const OverviewBarChart = () => {
    return (
        <div className='h-80'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    {/* <XAxis dataKey="name" />
                    <YAxis /> */}
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Checking" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="Treasury" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    <Bar dataKey="Vault" fill="#78B3CE" activeBar={<Rectangle fill="green" stroke="purple" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default OverviewBarChart;