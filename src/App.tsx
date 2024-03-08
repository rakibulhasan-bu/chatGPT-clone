import { useState } from "react";
import LeftSidebar from "./components/LeftSidebar";
import MainComponents from "./components/MainComponents";

const App = () => {
  const [close, setClose] = useState(false);

  return (
    <div className='bg-bgPrimary h-screen text-white flex'>
      {/* This is left sidebar */}
      <div className={`h-full ${close ? "w-0 hidden transition-all delay-100" : "transition-all w-0 md:w-[33%] lg:w-[19%]"}`}>
        <LeftSidebar />
      </div>
      {/* This is main component */}
      <div className={`h-full ${close ? "w-full" : "transition-all w-full md:w-[67%] lg:w-[81%]"}`}>
        <MainComponents close={close} setClose={setClose} />
      </div>
    </div>
  );
};

export default App;