import { BiEdit } from "react-icons/bi";

const LeftTopCreateChat = () => {
    return (
        <div className='sticky top-3 py-1.5 px-2 cursor-pointer w-[89%] flex items-center justify-between mx-[5%] rounded-lg bg-bgDark hover:bg-bgPrimary'>
            <div className='flex items-center gap-1'>
                <img className="size-7" src="/assets/chatgptlogo.png" alt="" />
                <span className="text-sm font-medium">New chat</span>
            </div>
            <BiEdit className="text-lg" />
        </div>
    );
};

export default LeftTopCreateChat;