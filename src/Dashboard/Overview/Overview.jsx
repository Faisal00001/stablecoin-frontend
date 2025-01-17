import { motion } from "framer-motion";
import Header from "../../components/common/Header/Header";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import MyAssetCard from "../../components/MyAssetCard/MyAssetCard";
import { CiWallet } from "react-icons/ci";
import SalesOverViewChart from "../../components/Overview/SalesOverViewChart";



const Overview = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <Header title={'Dashboard'}></Header>
            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                <motion.div
                    className='grid grid-cols-1 gap-5 md:grid-cols-2 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <PortfolioCard name="My Portfolio" value="$23569.00" icon={CiWallet} />
                    {/* <MyAssetCard name="My Asset" value="$1523.00" value_2="$2145.00" /> */}
                    {/* <PortfolioCard name="My Portfolio" value="$23569.00" icon={CiWallet}></PortfolioCard> */}
                </motion.div>
                {/* Charts */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <SalesOverViewChart />
                </div>
            </main>

        </div>
    );
};

export default Overview;