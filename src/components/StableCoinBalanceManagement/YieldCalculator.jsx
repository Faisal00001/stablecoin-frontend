import { useState } from "react";


const YieldCalculator = () => {
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
        <>
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
        </>
    );
};

export default YieldCalculator;