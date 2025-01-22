import { motion } from "framer-motion";
import Header from "../../components/common/Header/Header";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import MyAssetCard from "../../components/MyAssetCard/MyAssetCard";
import { CiWallet } from "react-icons/ci";
import SalesOverViewChart from "../../components/Overview/SalesOverViewChart";
import { IoIosInformationCircleOutline } from "react-icons/io";
import BusinessChart from "../../components/Overview/BusinessChart";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import Tabs from "../../components/Overview/Tabs";
import { useState } from "react";
import ManageRulesDrawer from "../../components/Overview/ManageRulesDrawer";
import BalanceSummary from "../../components/Overview/BalanceSummary";

import OverviewPieChart from "../../components/Overview/OverviewPieChart";
import OverviewBarChart from "../../components/Overview/OverviewBarChart";

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
                <div className="mt-10">
                    <div className="flex flex-col lg:flex-row gap-10 items-center">
                        <div className="w-full lg:w-[40%]">
                            <BalanceSummary />
                        </div>
                        <div className="w-full space-y-5 md:space-y-0 lg:w-[60%] flex flex-col md:flex-row gap-5 items-center">
                            <div className="w-full md:w-[70%]">
                                <OverviewBarChart />
                            </div>
                            <div className="w-full md:w-[30%]">
                                <OverviewPieChart />
                            </div>
                        </div>
                    </div>

                </div>


                <div>

                </div>
                <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center mt-10">
                    {/* Money record */}
                    <div className="flex flex-wrap gap-6 sm:gap-4 sm:flex-col md:flex-row lg:gap-14">
                        <div className="space-y-2">
                            <p className="text-sm font-bold">Money in this month</p>
                            <p className="text-sm">+125,873.65</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm font-bold">Money out this month</p>
                            <p className="text-sm">+125,873.65</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm font-bold">Lifetime yield earned</p>
                            <p className="text-green-500 text-sm">-125,873.65</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm font-bold">Auto-transfer</p>
                            {/* Manage rules drawer */}
                            <ManageRulesDrawer></ManageRulesDrawer>
                        </div>
                    </div>
                    {/* Actions */}
                    <div className="space-y-3 sm:w-full lg:w-auto">
                        <div className="flex justify-between w-full md:w-80 p-3 rounded-lg bg-[#FFF7FC] shadow">
                            <div className="space-y-2">
                                <h1 className="text-lg font-bold">Deposit funds</h1>
                                <p className="text-sm text-gray-500">Via ACH, wire, or check</p>
                            </div>
                            <div className="flex items-center justify-center w-7 h-7 bg-orange-500 rounded-full">
                                <span>
                                    <FaArrowRight className="text-lg text-white" />
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between w-full md:w-80 p-3 rounded-lg bg-[#FFF7FC] shadow">
                            <div className="space-y-2">
                                <h1 className="text-lg font-bold">Withdraw funds</h1>
                                <p className="text-sm text-gray-500">Between your accounts</p>
                            </div>
                            <div className="flex items-center justify-center w-7 h-7 bg-orange-500 rounded-full">
                                <span>
                                    <FaArrowRight className="text-lg text-white" />
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between w-full md:w-80 p-3 rounded-lg bg-[#FFF7FC] shadow">
                            <div className="space-y-2">
                                <h1 className="text-lg font-bold">Transfer stablecoins</h1>
                                <p className="text-sm text-gray-500">To your checking account</p>
                            </div>
                            <div className="flex items-center justify-center w-7 h-7 bg-orange-500 rounded-full">
                                <span>
                                    <FaPlus className="text-lg text-white" />
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between w-full md:w-80 p-3 rounded-lg bg-[#FFF7FC] shadow">
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


                {/* Tabs */}
                <div className="mt-10 w-full">
                    <Tabs></Tabs>
                </div>




            </main>

        </div>
    );
};

export default Overview;