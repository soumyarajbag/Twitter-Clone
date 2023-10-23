import LeftSideBar from "@/components/LeftSideBar";
import MainComponents from "@/components/MainComponents";
import { BsSearch } from "react-icons/bs";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSideBar />
        <MainComponents />
        <section className="w-full sticky top-0  flex flex-col items-stretch h-screen  px-6 ">
      <div>
        <div className="relative w-full h-full space-x-2 ">
          <label htmlFor="searchBox" className="absolute top-0 left-0 h-full flex items-center justify-center px-4">
          <BsSearch className="w-5 h-5 text-gray-500" />
          </label>
    
        <input type="text" id="searchBox" placeholder="Search Twitter" className="outline-none bg-neutral-900/90 border-none w-full h-full rounded-xl px-6 py-4" />
        </div>
        
      </div>
      <div></div>
      <div></div>
        </section>
      </div>
    </div>
  );
};

export default page;
