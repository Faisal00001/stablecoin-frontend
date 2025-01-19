import { IoMdMore } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";


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
                                    <tr className="bg-white">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  border-[1px] border-gray-200 ">
                                            Apple MacBook Pro 17"
                                        </th>
                                        <td className="px-6 py-4 border-[1px] border-gray-200">
                                            Silver
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            Laptop
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            $2999
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            $2999
                                        </td>
                                        <td className="px-6 py-4 flex justify-center items-center border-b-[1px] border-b-gray-200">
                                            <div className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center shadow cursor-pointer">
                                                <IoMdMore className="text-xl" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  border-[1px] border-gray-200 ">
                                            Apple MacBook Pro 17"
                                        </th>
                                        <td className="px-6 py-4 border-[1px] border-gray-200">
                                            Silver
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            Laptop
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            $2999
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            $2999
                                        </td>
                                        <td className="px-6 py-4 flex justify-center items-center border-b-[1px] border-b-gray-200">
                                            <div className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center shadow cursor-pointer">
                                                <IoMdMore className="text-xl" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  border-[1px] border-gray-200 ">
                                            Apple MacBook Pro 17"
                                        </th>
                                        <td className="px-6 py-4 border-[1px] border-gray-200">
                                            Silver
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            Laptop
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            $2999
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            $2999
                                        </td>
                                        <td className="px-6 py-4 flex justify-center items-center border-b-[1px] border-b-gray-200">
                                            <div className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center shadow cursor-pointer">
                                                <IoMdMore className="text-xl" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  border-[1px] border-gray-200 ">
                                            Apple MacBook Pro 17"
                                        </th>
                                        <td className="px-6 py-4 border-[1px] border-gray-200">
                                            Silver
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            Laptop
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            $2999
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            $2999
                                        </td>
                                        <td className="px-6 py-4 flex justify-center items-center border-b-[1px] border-b-gray-200">
                                            <div className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center shadow cursor-pointer">
                                                <IoMdMore className="text-xl" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  border-[1px] border-gray-200 ">
                                            Apple MacBook Pro 17"
                                        </th>
                                        <td className="px-6 py-4 border-[1px] border-gray-200">
                                            Silver
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            Laptop
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            $2999
                                        </td>
                                        <td className="px-6 py-4 border-[1px] border-gray-200 text-right">
                                            $2999
                                        </td>
                                        <td className="px-6 py-4 flex justify-center items-center border-b-[1px] border-b-gray-200">
                                            <div className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center shadow cursor-pointer">
                                                <IoMdMore className="text-xl" />
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
                Faisal
            </div>

            <input type="radio" name="my_tabs_1" role="tab" className="tab [&:checked]:border-b-black [&:checked]:border-b-[2px]" aria-label="Statements" />
            <div role="tabpanel" className="tab-content border-t-[1.5px]  border-t-gray-200">
                Good
            </div>
        </div>

    );
};

export default Tabs;