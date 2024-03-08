import { Tooltip } from "antd";
import { SetStateAction, useEffect, useRef } from "react";
import { IoArrowUp } from "react-icons/io5";
import { useAppContext } from "../../context";
import axios from "axios";

// type TInputAreaProps ={
//     sendMessage: () => Promise<void>
// }

const InputArea = () => {
    const openApiKey = import.meta.env.VITE_API_KEY;
    console.log(openApiKey);

    const { message, setMessage, allMessage, setAllMessage } = useAppContext();
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setMessage(e.target.value);
    }

    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "auto";
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
        }
    }, [message])

    const sendMessage = async () => {

        const url = "https://api.openai.com/v1/chat/completions";
        const token = `Bearer ${openApiKey}`;
        const model = 'gpt-3.5-turbo';

        const messagesToSend = [
            ...allMessage,
            {
                role: 'user',
                message
            }
        ];

        setAllMessage(messagesToSend);
        setMessage('');
        try {
            const res = await axios.post(url, {
                model: model,
                messages: messagesToSend
            }, {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            });

            if (res.data) {

                const newAllMessages = [
                    ...messagesToSend,
                    res.data.choices[0].message
                ];

                setAllMessage(newAllMessages);
                setMessage('');
            }

        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className='absolute bottom-0 left-0  px-4 w-full pb-2.5 bg-bgPrimary flex items-center justify-between'>
            <div className='w-full md:w-[520px] lg:w-[768px] mx-auto'>
                <div className='relative border border-borderColor rounded-xl'>
                    <textarea onChange={handleChange} value={message} ref={textAreaRef} rows={1} placeholder="Message ChatGPT..." className="resize-none rounded-xl pt-2.5 pb-1.5 pr-12 pl-4 h-fit max-h-40 overflow-y-auto border-none ring-0 outline-none focus-visible:border-none focus-visible:ring-0 bg-transparent w-full" />
                    <Tooltip placement="top" title={'Send message'} >
                        <div onClick={sendMessage} className='bg-white rounded-lg p-1 cursor-pointer absolute right-2 bottom-3'>
                            <IoArrowUp className="text-bgDark text-lg" />
                        </div>
                    </Tooltip>
                </div>
                <p className="text-xs text-center text-[#B4B4B4] pt-1.5">ChatGPT can make mistakes. Consider checking important information.</p>
            </div>
        </div>
    );
};

export default InputArea;