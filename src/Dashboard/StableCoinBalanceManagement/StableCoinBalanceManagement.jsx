import { useState } from "react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    {
        name: 'Jan',
        profit: 4000,

    },
    {
        name: 'Feb',
        profit: 5000,

    },
    {
        name: 'March',
        profit: 6000,

    },
    {
        name: 'April',
        profit: 7780,

    },
    {
        name: 'May',
        profit: 8890,

    },
    {
        name: 'june',
        profit: 9390,

    },
    {
        name: 'July',
        profit: 10490,

    },
];

const StableCoinBalanceManagement = () => {
    const [balance, setBalance] = useState(1000);
    const [duration, setDuration] = useState(6);
    const [result, setResult] = useState(null);
    // const [chartData, setChartData] = useState([]);
    const handleCalculate = () => {
        if (isNaN(balance) || isNaN(duration) || balance <= 0 || duration <= 0) {
            alert("Please enter valid balance and duration values.");
            return;
        }

        const rate = 0.05; // Example 5% annual yield
        const earnings = (balance * rate * duration) / 12;
        setResult(earnings.toFixed(2));

        // const data = Array.from({ length: duration }, (_, i) => {
        //     const month = i + 1;
        //     const monthlyEarnings = (balance * rate * month) / 12;
        //     return { month, earnings: balance + monthlyEarnings };
        // });
        // setChartData(data);
    };
    return (
        <div>
            <main className="py-6 px-4 lg:px-8">
                <h3 className="text-2xl font-bold">Current stablecoin</h3>
                <div className="mt-5 space-y-2">

                    <p>Total Stablecoin Balance: <strong>2,000 (USDG + USDC)</strong></p>

                    <p>Yield Earned:</p>
                    <ul className="list-disc ml-5">
                        <li>Total: <strong>$150</strong></li>
                    </ul>
                </div>
                <div className="flex gap-10 items-center">
                    <div className="max-w-md w-[40%] p-6 bg-white rounded-lg mt-10 border-[1px] border-gray-200">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Yield Calculator</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">
                                Balance ($)
                            </label>
                            <input
                                type="number"
                                value={balance}
                                onChange={(e) => setBalance(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">
                                Duration (months)
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="24"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                className="w-full appearance-none bg-gray-300 rounded-full h-2 cursor-pointer 
                            focus:outline-none "
                                style={{
                                    accentColor: "black",
                                }}
                            />
                            <p className="text-center text-gray-600 mt-2">{duration} months</p>
                        </div>
                        <button
                            onClick={handleCalculate}
                            className="w-full bg-black text-white py-2 px-4 rounded-lg  focus:outline-none "
                        >
                            Calculate
                        </button>
                        {result !== null && (
                            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                                <h3 className="text-lg font-bold">Estimated Earnings</h3>
                                <p className="text-xl font-semibold">${result}</p>
                            </div>
                        )}
                    </div>
                    {/* {chartData.length > 0 && (
                    <div className="mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Earnings Growth Chart</h2>
                        <ResponsiveContainer width="100%" height={300} className={`px-2`}>
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" label={{ value: "Month", position: "insideBottom", dy: 10 }} />
                                <YAxis
                                    label={{ value: "Balance ($)", angle: -90, position: "insideLeft", dx: -10 }}
                                />
                                <Tooltip />
                                <Line type="monotone" dataKey="earnings" stroke="#8884d8" strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )} */}
                    {/* Stable balance growth over time */}
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
                </div>


            </main>

        </div>
    );
};

export default StableCoinBalanceManagement;