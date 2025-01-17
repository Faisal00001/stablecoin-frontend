import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
const salesData = [
    { name: "Jul", sales: 4200 },
    { name: "Aug", sales: 3800 },
    { name: "Sep", sales: 5100 },
    { name: "Oct", sales: 4600 },
    { name: "Nov", sales: 5400 },
    { name: "Dec", sales: 7200 },
    { name: "Jan", sales: 6100 },
    { name: "Feb", sales: 5900 },

];

const SalesOverViewChart = () => {
    return (
        <motion.div
            className='rounded-xl p-6 border border-gray-200 w-[650px]'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className='text-2xl font-medium mb-4'>Sales Overview</h2>

            <div className='h-80'>
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart data={salesData}>
                        <CartesianGrid horizontal={true}
                            vertical={false}
                            stroke='#DDDDDD' />
                        <XAxis dataKey={"name"} stroke='#9ca3af' />
                        <YAxis stroke='#9ca3af' orientation="right" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#FBFBFB",

                            }}
                            itemStyle={{ color: "#1D1616" }}
                        />
                        <Line
                            type='monotone'
                            dataKey='sales'
                            stroke='#6366F1'
                            strokeWidth={3}
                            dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
                            activeDot={{ r: 8, strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default SalesOverViewChart;