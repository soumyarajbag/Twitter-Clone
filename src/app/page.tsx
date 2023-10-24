import LeftSideBar from "@/components/LeftSideBar";
import MainComponents from "@/components/MainComponents";
import RightSideBar from "@/components/RightSideBar";


const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSideBar />
        <MainComponents />
        <RightSideBar />
      </div>
    </div>
  );
};

export default page;
