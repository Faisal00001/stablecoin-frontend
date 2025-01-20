import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';

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
const seriesConfig = [
    { key: 'Checking', color: '#001A6E' },
    { key: 'Treasury', color: '#4DA1A9' },
    { key: 'Vault', color: '#78B3CE' }
];
const BusinessChart = () => {
    const [selectedSeries, setSelectedSeries] = useState(null);

    const handleSeriesClick = (dataKey) => {
        setSelectedSeries(prev => prev === dataKey ? null : dataKey);
    };

    const CustomLegend = () => (
        <div className="flex gap-3">
            {seriesConfig.map(({ key, color }) => (
                <button
                    key={key}
                    onClick={() => handleSeriesClick(key)}
                    className={`px-3 py-1 rounded ${selectedSeries === null || selectedSeries === key
                        ? ''
                        : ' text-gray-400'
                        }`}
                >
                    <div className='flex gap-2 items-center'>
                        <div className='w-2 h-2 rounded-full' style={{ backgroundColor: color }}>
                        </div>
                        <div className='text-sm'>
                            {key}
                        </div>
                    </div>
                </button>
            ))}
        </div>
    );

    return (
        <motion.div
            className='rounded-xl p-6 border border-gray-200 w-full'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className='flex gap-5 items-center mb-3'>
                <div className="dropdown dropdown-bottom dropdown-end w-32 h-8 rounded border border-gray-200 flex items-center justify-center shadow">
                    <div tabIndex={0} role="button" className="text-xs flex gap-1 items-center"><span>Last 12 months</span> <span> <FaAngleDown /> </span></div>

                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded z-[1] w-52 p-2 shadow mt-2">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <div>
                    <CustomLegend />
                </div>
            </div>
            <div className='h-48'>
                <ResponsiveContainer width={"100%"} height={"100%"}>
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
                        {/* <CartesianGrid horizontal={false}
                            vertical={false}
                            stroke='#DDDDDD' /> */}
                        {/* <XAxis dataKey={"name"} />
                        <YAxis /> */}
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#FBFBFB",

                            }}
                            itemStyle={{ color: "#1D1616" }}
                        />
                        {(selectedSeries === null || selectedSeries === 'Checking') && (
                            <Area type="monotone" dataKey="Checking" stackId="1" stroke="#001A6E" fill="#001A6E" fillOpacity={0.9} />
                        )}
                        {(selectedSeries === null || selectedSeries === 'Treasury') && (
                            <Area type="monotone" dataKey="Treasury" stackId="1" stroke="#4DA1A9" fill="#4DA1A9" fillOpacity={0.9} />
                        )}
                        {(selectedSeries === null || selectedSeries === 'Vault') && (
                            <Area type="monotone" dataKey="Vault" stackId="1" stroke="#78B3CE" fill="#78B3CE" fillOpacity={0.7} />
                        )}
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default BusinessChart;