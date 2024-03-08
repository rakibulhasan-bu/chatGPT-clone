import { createContext, useContext, useState } from "react";

export type TMessage = {
    message: string;
    role: string;
}

type TContextValue = {
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    allMessage: TMessage[];
    setAllMessage: React.Dispatch<React.SetStateAction<TMessage[]>>;
};


const AppContext = createContext<TContextValue>({
    message: '',
    setMessage: () => { },
    allMessage: [],
    setAllMessage: () => { },
});

export function AppWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [message, setMessage] = useState('')

    const [allMessage, setAllMessage] = useState<TMessage[]>([])

    const contextValue = {
        message, setMessage,
        allMessage, setAllMessage
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}