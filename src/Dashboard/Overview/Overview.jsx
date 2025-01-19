import { motion } from "framer-motion";
import Header from "../../components/common/Header/Header";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import MyAssetCard from "../../components/MyAssetCard/MyAssetCard";
import { CiWallet } from "react-icons/ci";
import SalesOverViewChart from "../../components/Overview/SalesOverViewChart";
import { IoIosInformationCircleOutline } from "react-icons/io";
import BusinessChart from "../../components/Overview/BusinessChart";
import { FaArrowRightLong, FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import Tabs from "../../components/Overview/Tabs";

const Overview = () => {
    return (
        <div className="flex-1 overflow-auto relative">
            <main className="py-6 px-4 lg:px-8">
                {/* <motion.div
                    className='grid grid-cols-1 gap-5 md:grid-cols-2 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <PortfolioCard name="My Portfolio" value="$23569.00" icon={CiWallet} />
                    
                </motion.div> */}
                <h3 className="text-2xl font-bold">All business accounts</h3>
                <div className="mt-10 flex gap-10">
                    <div className="flex gap-20 w-[75%] border-b-[1px] border-b-gray-200 ">
                        <div className="space-y-5 w-[30%]">
                            <h3 className="font-bold text-lg">Total balance</h3>
                            <p className="text-3xl font-bold">$5,999,567.25</p>
                            <div className="flex gap-2 items-center">
                                <p>
                                    $112,241,21.98
                                </p>
                                <p>pending</p>
                                <span>
                                    <IoIosInformationCircleOutline className="text-xl" />
                                </span>
                            </div>
                        </div>
                        <div className="w-[70%]">
                            <BusinessChart />
                        </div>
                    </div>
                    <div className="w-[25%] flex flex-col gap-3">
                        <div className="flex justify-between w-80 p-3 rounded-lg bg-[#FFF7FC] shadow">
                            <div className="space-y-2">
                                <h1 className="text-lg font-bold">Send money</h1>
                                <p className="text-sm text-gray-500">Via ACH, wire, or check</p>
                            </div>
                            <div className="flex items-center justify-center w-7 h-7 bg-orange-500 rounded-full">
                                <span>
                                    <FaArrowRight className="text-lg text-white" />
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between w-80 p-3 rounded-lg bg-[#FFF7FC] shadow">
                            <div className="space-y-2">
                                <h1 className="text-lg font-bold">Transfer money</h1>
                                <p className="text-sm text-gray-500">Between your accounts</p>
                            </div>
                            <div className="flex items-center justify-center w-7 h-7 bg-orange-500 rounded-full">
                                <span>
                                    <FaArrowRight className="text-lg text-white" />
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between w-80 p-3 rounded-lg bg-[#FFF7FC] shadow">
                            <div className="space-y-2">
                                <h1 className="text-lg font-bold">Add funds</h1>
                                <p className="text-sm text-gray-500">To your checking account</p>
                            </div>
                            <div className="flex items-center justify-center w-7 h-7 bg-orange-500 rounded-full">
                                <span>
                                    <FaPlus className="text-lg text-white" />
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between w-80 p-3 rounded-lg bg-[#FFF7FC] shadow">
                            <div className="space-y-2">
                                <h1 className="text-lg font-bold">More actions</h1>

                            </div>
                            <div className="flex items-center justify-center w-7 h-7 bg-orange-500 rounded-full">
                                <span>
                                    <IoIosMore className="text-lg text-white" />
                                </span>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="flex gap-20 items-center mt-8">
                    <div className="space-y-2">
                        <p className="text-sm font-bold">
                            Money in this month
                        </p>
                        <p className="text-sm">
                            +125,873.65
                        </p>

                    </div>
                    <div className="space-y-2">
                        <p className="text-sm font-bold">
                            Money out this month
                        </p>
                        <p className="text-sm">
                            +125,873.65
                        </p>

                    </div>
                    <div className="space-y-2">
                        <p className="text-sm font-bold">
                            Lifetime yield earned
                        </p>
                        <p className="text-green-500 text-sm">
                            -125,873.65
                        </p>

                    </div>
                    <div className="space-y-2 ">
                        <p className="text-sm font-bold ">
                            Auto-transfer
                        </p>
                        <div className="flex gap-2 items-center cursor-pointer group">
                            <p className="group-hover:underline text-sm">Manage rules</p>
                            <span><FaArrowRightLong /></span>
                        </div>

                    </div>
                </div>

                {/* Tabs */}
                <div className="mt-10 w-full">
                    <Tabs></Tabs>
                </div>




            </main>

        </div>
    );
};

export default Overview;