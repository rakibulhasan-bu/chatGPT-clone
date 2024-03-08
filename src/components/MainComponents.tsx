import { Tooltip } from "antd";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Header from "./ui/Header";
import InputArea from "./ui/InputArea";
import TextBox from "./ui/TextBox";
import { TMessage, useAppContext } from "../context";
import avatar from '/assets/Rakibul_Hasan -min.png';
import chatGptLogo from '/assets/chatgptlogo.png';

type TMainComponentsProps = {
    close: boolean;
    setClose: React.Dispatch<React.SetStateAction<boolean>>
}

const MainComponents = ({ close, setClose }: TMainComponentsProps) => {
    const textBoxTexts = [
        {
            title: "Create a content calender",
            details: "for a TikTok account"
        },
        {
            title: "Write a course overview",
            details: "on the physiology behind decision-making"
        },
        {
            title: "Plan a trip",
            details: "for a photography in iceland"
        },
        {
            title: "Recommended activities",
            details: "for a team building day with remote employees"
        },
    ]
    const { allMessage } = useAppContext();


    return (
        <div className='relative w-full h-full'>
            {/* this is arrow buttons  */}
            <div className='hidden lg:absolute top-[50%] left-1'>
                {close &&
                    <Tooltip placement="right" title={'Open Sidebar'} >
                        <IoIosArrowForward onClick={() => setClose(false)} className="text-xl font-medium cursor-pointer" />
                    </Tooltip>
                }
                {!close &&
                    <Tooltip placement="right" title={'Close Sidebar'} >
                        <IoIosArrowBack onClick={() => setClose(true)} className="text-xl font-medium cursor-pointer" />
                    </Tooltip>
                }
            </div>

            <Header close={close} />
            <div className='w-[95%] md:w-[520px] lg:w-[768px] h-full mx-auto'>
                {allMessage.length > 0 ?
                    (
                        <div className='pt-24 pb-20 space-y-2 h-full overflow-auto'>

                            {allMessage.map((message: TMessage, index: number) => (
                                <div key={index} className={"flex items-start gap-2"}>
                                    <img src={message.role === 'user' ? avatar : chatGptLogo} alt="" className="size-8 rounded-full" />
                                    <div className={""}>
                                        <h2 className="font-medium">{message.role === 'user' ? 'You' : 'ChatGPT'}</h2>
                                        <p className="text-sm">{message.message}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                    :
                    <div className='h-full pt-48 md:pt-32 pb-28 md:pb-24 flex flex-col'>

                        <div className='flex flex-col items-center justify-center'>
                            <img className="size-12" src="/assets/chatgptlogo.png" alt="" />
                            <h1 className="text-2xl font-medium pt-2">How can I help you today?</h1>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mt-auto'>
                            {
                                textBoxTexts.map(textBox => (
                                    <TextBox key={textBox.title} textbox={textBox} />
                                ))
                            }
                        </div>
                    </div>
                }

                <InputArea />
            </div>
        </div>
    );
};

export default MainComponents;