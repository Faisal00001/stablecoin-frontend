import { motion } from "framer-motion";
import { CiWallet } from "react-icons/ci";


const PortfolioCard = ({ name, icon: Icon, value }) => {
    return (
        <div>
            <motion.div className="max-w-sm p-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg relative"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
            >
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 opacity-20">
                    <div className="border border-white" />
                    <div className="border border-white" />
                    <div className="border border-white" />
                    <div className="border border-white" />
                    <div className="border border-white" />
                    <div className="border border-white" />
                    <div className="border border-white" />
                    <div className="border border-white" />
                    <div className="border border-white" />
                    <div className="border border-white" />
                    <div className="border border-white" />
                    <div className="border border-white" />
                    <div className="border border-white" />
                    <div className="border border-white" />
                    <div className="border border-white" />
                    <div className="border border-white" />
                </div>
                <div className="relative z-10 text-white">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Icon className="text-2xl" />
                            <p className="font-medium">{name}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-3xl font-semibold">{value}</h1>
                        <p className="mt-1 text-sm text-white">
                            ↑ 10.5% (+$908)
                        </p>
                    </div>
                    <div className="mt-6 flex space-x-4">
                        <button className="flex-1 px-4 py-2 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100">
                            Deposit
                        </button>
                        <button className="flex-1 px-4 py-2 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100">
                            Withdraw
                        </button>
                        <button className="flex px-4 py-2 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </motion.div>


        </div>
    );
};

export default PortfolioCard;