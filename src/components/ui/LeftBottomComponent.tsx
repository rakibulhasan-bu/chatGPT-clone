import { BsStars } from "react-icons/bs";

const LeftBottomComponent = () => {
    return (
        <div className='fixed bottom-0 w-fit z-40 left-0 p-4 bg-bgDark'>
            <div className='flex items-center gap-1 hover:bg-bgPrimary rounded-lg px-2 py-1.5 cursor-pointer'>
                <div className='border border-borderColor rounded-full p-1'>
                    <BsStars />
                </div>
                <div className='flex flex-col'>
                    <span className="text-sm font-medium">Upgrade Plan</span>
                    <span className="text-xs text-textGrey">Get GPT-4, DALL·E, and more</span>
                </div>

            </div>

            <div className='flex items-center gap-1 hover:bg-bgPrimary rounded-lg px-2 py-1.5 cursor-pointer'>
                <img className="size-8 rounded-full" src="/assets/Rakibul_Hasan -min.png" alt="" />
                <span className="text-sm font-medium">Rakibul Hasan</span>
            </div>


        </div>
    );
};

export default LeftBottomComponent;