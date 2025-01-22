import { TiHomeOutline } from "react-icons/ti";
import { GrTechnology } from "react-icons/gr";
import { CiWallet } from "react-icons/ci";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdAccountBalance } from "react-icons/md";

const sidebarItems = [
    {
        name: 'Dashboard',
        icon: <TiHomeOutline className="text-2xl hover:text-blue-700" />,
        path: 'overview'
    },
    {
        name: 'Balance Management',
        icon: <MdAccountBalance className="text-2xl hover:text-blue-700" />,
        path: 'stableCoinBalanceManagement'
    },
    {
        name: 'Market',
        icon: <GrTechnology className="text-2xl hover:text-blue-700" />,
        path: 'market'
    },
    {
        name: 'My Wallet',
        icon: <CiWallet className="text-2xl hover:text-blue-700" />,
        path: 'myWallet'
    }
]
const Siderbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    return (
        <motion.div
            className={`h-screen relative z-10 transition-all duration-300 ease-in-out flex-shrink-0  ${isSidebarOpen ? "w-64" : "w-20"
                }`}
            animate={{ width: isSidebarOpen ? 256 : 90 }}
        >
            <div className='h-full bg-[#F8FAFC] bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-[#dee3e7]'>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className='p-2 rounded-full hover:bg-yellow-500 transition-colors max-w-fit'
                >

                    <CiMenuFries className="text-2xl"></CiMenuFries>
                </motion.button>
                <nav className='mt-8 flex-grow'>
                    {
                        sidebarItems.map((item, index) => {
                            return <Link key={index} to={item.path}>
                                <motion.div
                                    className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-100  transition-colors mb-2'
                                >
                                    {item.icon}
                                    <AnimatePresence>
                                        {isSidebarOpen && (
                                            <motion.span
                                                className='ml-4 whitespace-nowrap'
                                                initial={{ opacity: 0, width: 0 }}
                                                animate={{ opacity: 1, width: "auto" }}
                                                exit={{ opacity: 0, width: 0 }}
                                                transition={{ duration: 0.2, delay: 0.3 }}
                                            >
                                                {item.name}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </Link>
                        })
                    }
                </nav>
            </div>
        </motion.div>
    );
};

export default Siderbar;