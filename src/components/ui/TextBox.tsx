import { Tooltip } from "antd";
import { IoArrowUp } from "react-icons/io5";
import { useAppContext } from "../../context";

type TTextBox = {
    textbox: {
        title: string;
        details: string;
    }
}

const TextBox = ({ textbox }: TTextBox) => {
    const { allMessage, setAllMessage } = useAppContext();

    return (
        <div onClick={() => setAllMessage([...allMessage, { role: "user", message: textbox.title }])} className='hover:bg-[#2F2F2F] relative font-medium group cursor-pointer rounded-xl px-4 py-3 border border-borderColor'>
            <h1 className="text-sm">{textbox?.title}</h1>
            <p className="text-[#B2B2B2] text-sm">{textbox?.details}</p>

            <Tooltip placement="top" title={'Click to send'} >
                <div className='bg-bgDark rounded-lg p-1 cursor-pointer absolute top-5 right-4 hidden group-hover:block'>
                    <IoArrowUp className="text-white" />
                </div>
            </Tooltip>
        </div>
    );
};

export default TextBox;