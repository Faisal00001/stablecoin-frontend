import {  AreaChart, Area, XAxis,  Tooltip,  ResponsiveContainer } from 'recharts';
const data = [
    {
        name: "Jan",
        profit: 4000,
    },
    {
        name: "Feb",
        profit: 5000,
    },
    {
        name: "Mar", // Shortened to maintain consistency
        profit: 6000,
    },
    {
        name: "Apr", // Shortened to maintain consistency
        profit: 7780,
    },
    {
        name: "May",
        profit: 8890,
    },
    {
        name: "Jun", // Shortened to maintain consistency
        profit: 9390,
    },
    {
        name: "Jul", // Shortened to maintain consistency
        profit: 10490,
    },
];
const StablecoinBalanceGrowth = () => {
    return (
        <>
            <div className="h-80 mt-10 p-10 bg-white rounded-lg  border border-gray-200 w-[60%]">
                        <h3 className="text-2xl font-bold">Stablecoin Balance Growth</h3>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                width={500}
                                height={400}
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                <XAxis dataKey="name" />
                                {/* <YAxis /> */}
                                <Tooltip />
                                <Area type="monotone" dataKey="profit" stroke="#8884d8" fill="#180161" fillOpacity={0.9} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
        </>
    );
};

export default StablecoinBalanceGrowth;