import { useState } from "react";
import { BiEdit, BiMenuAltLeft } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiUploadSimple } from "react-icons/pi";
import LeftSidebar from "../LeftSidebar";
import { RxCross2 } from "react-icons/rx";

type THeader = {
    close: boolean;
}

const Header = ({ close }: THeader) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='absolute top-0 left-0 px-4 w-full py-1 md:py-2.5 bg-bgPrimary flex items-center justify-between border-b border-borderColor md:border-none'>
                <BiMenuAltLeft onClick={() => setOpen(true)} className="text-2xl cursor-pointer lg:hidden" />
                <div className='flex items-center gap-2'>
                    {
                        close &&
                        <div className='border-borderColor border cursor-pointer rounded-lg p-2'>
                            <BiEdit className="text-xl text-textGrey" />
                        </div>
                    }
                    <div className='font-semibold text-lg 2xl:text-xl flex items-center gap-1.5 cursor-pointer hover:bg-borderColor py-1.5 px-3 rounded-lg'>
                        ChatGPT <span className="text-gray-300 flex items-center gap-2">3.5 <MdKeyboardArrowDown /></span>
                    </div>
                </div>


                <div className='lg:hidden cursor-pointer'>
                    <BiEdit className="text-2xl text-textGrey" />
                </div>

                <div className='hidden lg:block border-borderColor border hover:bg-[#2F2F2F] cursor-pointer rounded-lg p-2'>
                    <PiUploadSimple className="text-xl" />
                </div>
            </div>
            {
                open &&
                <div className='fixed lg:hidden top-0 left-0 bottom-0 w-full z-50 h-screen flex bg-black/50'>
                    <div className='w-5/6 h-full'>
                        <LeftSidebar />
                    </div>
                    <div className='w-1/6 pl-2 pt-4 h-full'>
                        <RxCross2 onClick={() => setOpen(false)} className="text-white text-2xl" />
                    </div>
                </div>
            }
        </>
    );
};

export default Header;