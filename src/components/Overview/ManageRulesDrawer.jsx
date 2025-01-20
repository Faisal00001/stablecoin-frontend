import { useState } from "react";
import { FaAngleDown, FaArrowRightLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const ManageRulesDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const closeDrawer = () => {
        setIsOpen(false);
    };
    const [activeTab, setActiveTab] = useState("tab1");
    return (
        <div>
            <div className="relative">
                {/* Page content */}
                <button
                    onClick={toggleDrawer}
                    className="flex gap-2 items-center"
                >
                    <p className="text-sm underline hover:text-gray-500">Manage rules</p>
                    <FaArrowRightLong className="text-gray-500" />
                </button>

                {/* Overlay */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-20"
                        onClick={closeDrawer}

                    ></div>
                )}

                {/* Sidebar */}
                <div
                    className={`fixed top-0 z-30  right-0 bg-white w-[35%] h-full shadow-lg transform transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {/* Close button */}
                    <button
                        onClick={closeDrawer}
                        className="absolute top-3 right-4 text-black hover:text-gray-500 focus:outline-none w-9 h-9 rounded-full hover:bg-gray-200 flex justify-center items-center"
                    >
                        <IoClose className="text-3xl " />
                    </button>

                    {/* Sidebar content */}
                    <div className="p-5">
                        <h3 className="font-bold">Primary checking .... 1111</h3>
                    </div>
                    <hr />
                    <div className="p-4">
                        <div>
                            {/* Tab List */}
                            <div
                                role="tablist"
                                className="tabs tabs-boxed bg-[#F5F7F8] h-12 px-1 flex"
                            >
                                <a
                                    role="tab"
                                    className={`tab flex-1 my-[2px] h-9 text-center border-[1px] ${activeTab === "tab1"
                                        ? "bg-white shadow border-gray-100"
                                        : "border-transparent"
                                        }`}
                                    onClick={() => setActiveTab("tab1")}
                                >
                                    Account Details
                                </a>
                                <a
                                    role="tab"
                                    className={`tab flex-1 my-[2px] h-9 text-center border-[1px] ${activeTab === "tab2"
                                        ? "bg-white shadow border-gray-100"
                                        : "border-transparent"
                                        }`}
                                    onClick={() => setActiveTab("tab2")}
                                >
                                    Settings
                                </a>
                            </div>

                            {/* Tab Content */}
                            <div className="mt-5 h-[calc(100vh-150px)] overflow-y-auto ">

                                {activeTab === "tab1" && (
                                    <div className="mb-5">
                                        <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg">
                                            <div className="flex justify-between items-center">
                                                <h2 className="font-bold text-sm">Payment approvals</h2>
                                                <div className="w-8 h-8 rounded-full bg-[#F5F7F8] flex justify-center items-center">
                                                    <FaAngleDown />
                                                </div>

                                            </div>
                                            <hr className="my-2" />
                                            <div className="flex gap-2 items-center">
                                                <p className=" text-xs text-black">
                                                    Automatic transfers from your accounts ensure your Brex balance always has the funds you need. Your rules:
                                                </p>
                                                <button className=" px-2 py-2 text-xs font-medium  border border-gray-200 rounded-lg">
                                                    Manage
                                                </button>
                                            </div>

                                            <ul className="pl-4 mt-2 space-y-2 text-xs text-gray-500 list-disc">
                                                <li> Maximum balance on Primary checking: $180,000.00</li>
                                                <li> Recurring monthly transfer to Primary checking: $80,000.00</li>
                                            </ul>
                                        </div>
                                        <div className="w-full mt-5 max-w-md p-4 border border-gray-200 rounded-lg">
                                            <div className="flex justify-between items-center">
                                                <h2 className="font-bold text-sm">Payment approvals</h2>
                                                <div className="w-8 h-8 rounded-full bg-[#F5F7F8] flex justify-center items-center">
                                                    <FaAngleDown />
                                                </div>

                                            </div>
                                            <hr className="my-2" />
                                            <div className="flex gap-2 items-center">
                                                <p className=" text-xs text-black">
                                                    Automatic transfers from your accounts ensure your Brex balance always has the funds you need. Your rules:
                                                </p>
                                                <button className=" px-2 py-2 text-xs font-medium  border border-gray-200 rounded-lg">
                                                    Manage
                                                </button>
                                            </div>

                                            <ul className="pl-4 mt-2 space-y-2 text-xs text-gray-500 list-disc">
                                                <li> Maximum balance on Primary checking: $180,000.00</li>
                                                <li> Recurring monthly transfer to Primary checking: $80,000.00</li>
                                            </ul>
                                        </div>



                                    </div>
                                )}
                                {activeTab === "tab2" && (
                                    <div className="mb-5">
                                        <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg">
                                            <div className="flex justify-between items-center">
                                                <h2 className="font-bold text-sm">Auto-transfer rules</h2>
                                                <div className="w-8 h-8 rounded-full bg-[#F5F7F8] flex justify-center items-center">
                                                    <FaAngleDown />
                                                </div>
                                                {/* <button className="px-3 py-1 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100">
                                                    Manage
                                                </button> */}
                                            </div>
                                            <hr className="my-2" />
                                            <div className="flex gap-2 items-center">
                                                <p className=" text-xs text-black">
                                                    Automatic transfers from your accounts ensure your Brex balance always has the funds you need. Your rules:
                                                </p>
                                                <button className=" px-2 py-2 text-xs font-medium  border border-gray-200 rounded-lg">
                                                    Manage
                                                </button>
                                            </div>

                                            <ul className="pl-4 mt-2 space-y-2 text-xs text-gray-500 list-disc">
                                                <li> Maximum balance on Primary checking: $180,000.00</li>
                                                <li> Recurring monthly transfer to Primary checking: $80,000.00</li>
                                            </ul>
                                        </div>
                                        <div className="w-full mt-5 max-w-md p-4 border border-gray-200 rounded-lg">
                                            <div className="flex justify-between items-center">
                                                <h2 className="font-bold text-sm">Auto-transfer rules</h2>
                                                <div className="w-8 h-8 rounded-full bg-[#F5F7F8] flex justify-center items-center">
                                                    <FaAngleDown />
                                                </div>

                                            </div>
                                            <hr className="my-2" />
                                            <div className="flex gap-2 items-center">
                                                <p className=" text-xs text-black">
                                                    Automatic transfers from your accounts ensure your Brex balance always has the funds you need. Your rules:
                                                </p>
                                                <button className=" px-2 py-2 text-xs font-medium  border border-gray-200 rounded-lg">
                                                    Manage
                                                </button>
                                            </div>

                                            <ul className="pl-4 mt-2 space-y-2 text-xs text-gray-500 list-disc">
                                                <li> Maximum balance on Primary checking: $180,000.00</li>
                                                <li> Recurring monthly transfer to Primary checking: $80,000.00</li>
                                            </ul>
                                        </div>
                                        <div className="w-full mt-5 max-w-md p-4 border border-gray-200 rounded-lg">
                                            <div className="flex justify-between items-center">
                                                <h2 className="font-bold text-sm">Auto-transfer rules</h2>
                                                <div className="w-8 h-8 rounded-full bg-[#F5F7F8] flex justify-center items-center">
                                                    <FaAngleDown />
                                                </div>

                                            </div>
                                            <hr className="my-2" />
                                            <div className="flex gap-2 items-center">
                                                <p className=" text-xs text-black">
                                                    Automatic transfers from your accounts ensure your Brex balance always has the funds you need. Your rules:
                                                </p>
                                                <button className=" px-2 py-2 text-xs font-medium  border border-gray-200 rounded-lg">
                                                    Manage
                                                </button>
                                            </div>

                                            <ul className="pl-4 mt-2 space-y-2 text-xs text-gray-500 list-disc">
                                                <li> Maximum balance on Primary checking: $180,000.00</li>
                                                <li> Recurring monthly transfer to Primary checking: $80,000.00</li>
                                            </ul>
                                        </div>


                                    </div>
                                )}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ManageRulesDrawer;