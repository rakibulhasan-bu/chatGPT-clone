import { useAppContext } from "../context";
import LeftBottomComponent from "./ui/LeftBottomComponent";
import LeftTopCreateChat from "./ui/LeftTopCreateChat";

const LeftSidebar = () => {
    const { allMessage } = useAppContext();
    return (
        <div className='w-full h-full bg-bgDark relative overflow-auto'>
            <LeftTopCreateChat />
            {
                allMessage.length > 0 && (
                    <div className='pt-10'>
                        {
                            allMessage.map(message => (
                                <p key={message.message} className="hover:bg-bgPrimary px-2 py-2 rounded-lg mx-3">{message.message.slice(0, 26)}{message.message.length >= 26 && "..."}</p>
                            ))
                        }
                    </div>
                )
            }
            <LeftBottomComponent />
        </div>
    );
};

export default LeftSidebar;