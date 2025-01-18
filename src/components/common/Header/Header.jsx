import { IoIosSearch, IoLogoFoursquare, IoMdNotificationsOutline } from "react-icons/io";
import { LuBookOpen } from "react-icons/lu";
import { GiCrystalShine } from "react-icons/gi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
const Header = ({ title }) => {
    return (
        <header className='border-b border-gray-200 w-full'>
            <div className='py-4 px-4 sm:px-6 lg:px-5'>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <IoLogoFoursquare className="text-3xl" />
                        <h1 className='text-2xl font-semibold text-black'>{title}</h1>

                    </div>
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center shadow">
                            <IoIosSearch className="text-xl" />
                        </div>
                        <div className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center shadow">
                            <IoMdNotificationsOutline className="text-xl" />
                        </div>
                        <div className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center shadow">
                            <LuBookOpen className="text-xl" />
                        </div>
                        <div className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center shadow">
                            <GiCrystalShine className="text-xl" />
                        </div>
                        <div className="w-20 h-8 rounded border border-gray-200 flex gap-1 items-center justify-center shadow">
                            <AiOutlineQuestionCircle className="text-base" />
                            <span className="text-xs">
                                Support
                            </span>
                        </div>
                        <div className="dropdown dropdown-bottom dropdown-end w-32 h-8 rounded border border-gray-200 flex items-center justify-center shadow">
                            <div tabIndex={0} role="button" className="text-xs flex gap-1 items-center"><span>Olivia Wilson</span> <span> <FaAngleDown /> </span></div>

                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded z-[1] w-52 p-2 shadow mt-2">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        {/* <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;