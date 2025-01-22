import { IoMdMore } from "react-icons/io";
import { IoGridSharp, IoSettingsOutline } from "react-icons/io5";
import { SiPayloadcms } from "react-icons/si";
import { GoGraph } from "react-icons/go";
import { FiDownload } from "react-icons/fi";
import { RiLuggageDepositFill } from "react-icons/ri";
import { PiHandWithdrawBold } from "react-icons/pi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
const Tabs = () => {
    return (

        <div role="tablist" className="tabs">

            <input type="radio" name="my_tabs_1" role="tab" className="tab [&:checked]:border-b-black [&:checked]:border-b-[2px]" aria-label="Accounts" defaultChecked />
            <div role="tabpanel" className="tab-content border-t-[1.5px]  border-t-gray-200">
                <div className="pt-5">
                    {/* Search  */}
                    <div className="flex gap-5 items-center justify-between">
                        <form className="w-[85%]">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:outline-none" placeholder="Search or filter" required />

                            </div>
                        </form>
                        <div className="w-[15%]">
                            <div className="flex gap-2">
                                <div className="w-9 h-9 rounded border border-gray-200 flex items-center justify-center shadow">
                                    <IoSettingsOutline className="text-xl" />
                                </div>
                                <div>
                                    <div className="h-9 rounded border border-gray-200  shadow flex items-center justify-center w-32">

                                        <span className="text-xs font-bold">
                                            Add account
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Table */}


                    <section className="mt-5">

                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right ">
                                <thead className="text-xs text-gray-700  bg-gray-50 ">
                                    <tr className="border-[1px] border-gray-200">
                                        <th scope="col" className="px-6 py-3 border-[1px] border-gray-200">
                                            Account
                                        </th>
                                        <th scope="col" className="px-6 py-3 border-[1px] border-gray-200">
                                            Last Statement
                                        </th>
                                        <th scope="col" className="px-6 py-3 border-[1px] border-gray-200 text-right">
                                            Money in this month
                                        </th>
                                        <th scope="col" className="px-6 py-3 border-[1px] border-gray-200 text-right">
                                            Money out this month
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right border-[1px] border-gray-200">
                                            Balance
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right ">

                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="border-[1px] border-gray-200">
                                    <tr className="bg-white h-16">
                                        <th scope="row" className="px-6 py-4  whitespace-nowrap  border-[1px] border-gray-200 ">
                                            <div className="flex gap-2 items-center">
                                                <div className="bg-[#001A6E] w-6 h-6 flex justify-center items-center rounded-full">
                                                    <SiPayloadcms className="text-sm text-white" />
                                                </div>
                                                <div>
                                                    <p className="font-bold">Primary checking</p>
                                                    <p className="text-xs text-gray-500">Checking .... 1111</p>
                                                </div>

                                            </div>
                                        </th>
                                        <td className="px-6 py-4 border-[1px] border-gray-200">
                                            <div className="flex gap-2 items-center">
                                                <FiDownload className="text-xl" />
                                                <p className="font-bold">August 2024</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            <p className="font-bold">+$413,938.00</p>
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            <p className="font-bold"> -$413,938.00</p>
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            <p className="font-bold">$413,938.00</p>
                                        </td>
                                        <td className="px-6 py-4 border border-gray-200 ">
                                            <div className="flex justify-center items-center">
                                                <div className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center shadow cursor-pointer">
                                                    <IoMdMore className="text-xl" />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <th scope="row" className="px-6 py-4  whitespace-nowrap  border-[1px] border-gray-200 ">
                                            <div className="flex gap-2 items-center">
                                                <div className="bg-[#001A6E] w-6 h-6 flex justify-center items-center rounded-full">
                                                    <SiPayloadcms className="text-sm text-white" />
                                                </div>
                                                <div>
                                                    <p className="font-bold">Payroll</p>
                                                    <p className="text-xs text-gray-500">Checking .... 1112</p>
                                                </div>

                                            </div>
                                        </th>
                                        <td className="px-6 py-4 border-[1px] border-gray-200">
                                            <div className="flex gap-2 items-center">
                                                <FiDownload className="text-xl" />
                                                <p className="font-bold">August 2024</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            <p className="font-bold">+$413,938.00</p>
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            <p className="font-bold"> -$413,938.00</p>
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            <p className="font-bold">$413,938.00</p>
                                        </td>
                                        <td className="px-6 py-4 border border-gray-200 ">
                                            <div className="flex justify-center items-center">
                                                <div className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center shadow cursor-pointer">
                                                    <IoMdMore className="text-xl" />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <th scope="row" className="px-6 py-4  whitespace-nowrap  border-[1px] border-gray-200 ">
                                            <div className="flex gap-2 items-center">
                                                <div className="bg-[#4DA1A9] w-6 h-6 flex justify-center items-center rounded-full">
                                                    <GoGraph className="text-sm text-white" />
                                                </div>
                                                <div>
                                                    <p className="font-bold">Treasury</p>

                                                </div>

                                            </div>
                                        </th>
                                        <td className="px-6 py-4 border-[1px] border-gray-200">
                                            <div className="flex gap-2 items-center">
                                                <FiDownload className="text-xl" />
                                                <p className="font-bold">August 2024</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            <p className="font-bold">+$413,938.00</p>
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            <p className="font-bold"> -$413,938.00</p>
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            <p className="font-bold">$413,938.00</p>
                                        </td>
                                        <td className="px-6 py-4 border border-gray-200 ">
                                            <div className="flex justify-center items-center">
                                                <div className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center shadow cursor-pointer">
                                                    <IoMdMore className="text-xl" />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <th scope="row" className="px-6 py-4  whitespace-nowrap  border-[1px] border-gray-200 ">
                                            <div className="flex gap-2 items-center">
                                                <div className="bg-[#78B3CE] w-6 h-6 flex justify-center items-center rounded-full">
                                                    <GoGraph className="text-sm text-white" />
                                                </div>
                                                <div>
                                                    <p className="font-bold">Vault</p>

                                                </div>

                                            </div>
                                        </th>
                                        <td className="px-6 py-4 border-[1px] border-gray-200">
                                            <div className="flex gap-2 items-center">
                                                <FiDownload className="text-xl" />
                                                <p className="font-bold">August 2024</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            <p className="font-bold">$0.00</p>
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            <p className="font-bold">$0.00</p>
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            <p className="font-bold">$413,938.00</p>
                                        </td>
                                        <td className="px-6 py-4 border border-gray-200 ">
                                            <div className="flex justify-center items-center">
                                                <div className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center shadow cursor-pointer">
                                                    <IoMdMore className="text-xl" />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>




                                </tbody>
                            </table>
                        </div>

                    </section>




                </div>
            </div>

            <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab [&:checked]:border-b-black [&:checked]:border-b-[2px]"
                aria-label="Transactions"
            />
            <div role="tabpanel" className="tab-content border-t-[1.5px]  border-t-gray-200">
                <form className="w-[85%] mt-5">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:outline-none" placeholder="Search or filter" required />

                    </div>
                </form>
                <div className="relative overflow-x-auto my-5">
                    <table className="w-full text-sm text-left rtl:text-right">
                        <thead className="text-xs text-gray-700 bg-gray-50">
                            <tr className="border-[1px] border-gray-200">
                                <th scope="col" className="px-6 py-3 border-[1px] border-gray-200">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3 border-[1px] border-gray-200">
                                    Type
                                </th>
                                <th scope="col" className="px-6 py-3 border-[1px] border-gray-200 text-right">
                                    Amount
                                </th>
                                <th scope="col" className="px-6 py-3 border-[1px] border-gray-200 text-right">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-[1px] border-gray-200">
                            <tr className="bg-white h-16">
                                <th scope="row" className="px-6 py-4 whitespace-nowrap border-[1px] border-gray-200">
                                    <div className="flex gap-2 items-center">
                                        <div className="bg-[#006e4d] w-6 h-6 flex justify-center items-center rounded-full">
                                            <IoGridSharp className="text-sm text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold">2025-01-20</p>
                                            <p className="text-xs text-gray-500">Transaction ID: #1111</p>
                                        </div>
                                    </div>
                                </th>
                                <td className="px-6 py-4 border-[1px] border-gray-200">
                                    <div className="flex gap-2 items-center">
                                        <RiLuggageDepositFill className="text-xl" />
                                        <p className="font-bold">Deposit</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                    <p className="font-bold text-green-600">+$1,200.00</p>
                                </td>
                                <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                    <p className="font-bold text-gray-500">Completed</p>
                                </td>
                            </tr>
                            <tr className="bg-white h-16">
                                <th scope="row" className="px-6 py-4 whitespace-nowrap border-[1px] border-gray-200">
                                    <div className="flex gap-2 items-center">
                                        <div className="bg-[#006e4d] w-6 h-6 flex justify-center items-center rounded-full">
                                            <IoGridSharp className="text-sm text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold">2025-01-19</p>
                                            <p className="text-xs text-gray-500">Transaction ID: #1112</p>
                                        </div>
                                    </div>
                                </th>
                                <td className="px-6 py-4 border-[1px] border-gray-200">
                                    <div className="flex gap-2 items-center">
                                        <PiHandWithdrawBold className="text-xl" />
                                        <p className="font-bold">Withdrawal</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                    <p className="font-bold text-red-600">-$500.00</p>
                                </td>
                                <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                    <p className="font-bold text-yellow-500">Pending</p>
                                </td>
                            </tr>
                            <tr className="bg-white h-16">
                                <th scope="row" className="px-6 py-4 whitespace-nowrap border-[1px] border-gray-200">
                                    <div className="flex gap-2 items-center">
                                        <div className="bg-[#006e4d] w-6 h-6 flex justify-center items-center rounded-full">
                                            <IoGridSharp className="text-sm text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold">2025-01-18</p>
                                            <p className="text-xs text-gray-500">Transaction ID: #1113</p>
                                        </div>
                                    </div>
                                </th>
                                <td className="px-6 py-4 border-[1px] border-gray-200">
                                    <div className="flex gap-2 items-center">
                                        <FaMoneyBillTransfer className="text-xl" />
                                        <p className="font-bold">Transfer</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                    <p className="font-bold text-green-600">+$800.00</p>
                                </td>
                                <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                    <p className="font-bold text-gray-500">Completed</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>


        </div>

    );
};

export default Tabs;