
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

import StablecoinBalanceGrowth from "../../components/StableCoinBalanceManagement/StablecoinBalanceGrowth";
import YieldCalculator from "../../components/StableCoinBalanceManagement/YieldCalculator";


const StableCoinBalanceManagement = () => {

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
                    <YieldCalculator />
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
                    <StablecoinBalanceGrowth />
                </div>


            </main>

        </div>
    );
};

export default StableCoinBalanceManagement;