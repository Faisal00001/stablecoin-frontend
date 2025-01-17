import { IoMdNotificationsOutline } from "react-icons/io";
const Header = ({ title }) => {
    return (
        <header className='bg-opacity-50 backdrop-blur-md border-b border-gray-200 w-full'>
            <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className='text-2xl font-semibold text-black'>{title}</h1>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                            <IoMdNotificationsOutline className="text-2xl" />
                        </div>
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;