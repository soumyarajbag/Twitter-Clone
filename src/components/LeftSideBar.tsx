import Link from "next/link";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsTwitter,
  BsEnvelope,
  BsThreeDots,
} from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";

const NAVIGATION_ITEMS = [
    {
      title: "Twitter",
      icon: BsTwitter,
    },
    {
      title: "Home",
      icon: BiHomeCircle,
    },
    {
      title: "Explore",
      icon: HiOutlineHashtag,
    },
    {
      title: "Notifications",
      icon: BsBell,
    },
    {
      title: "Messages",
      icon: BsEnvelope,
    },
    {
      title: "Bookmarks",
      icon: BsBookmark,
    },
    {
      title: "Profile",
      icon: BiUser,
    },
  ];
const LeftSideBar = () => {
  return (
    <section className="w-[20%]  sticky top-0   flex flex-col items-stretch h-screen  px-6">
    <div className="flex flex-col items-stretch  space-y-4  h-full mt-4">
      {NAVIGATION_ITEMS.map((item, index) => (
        <Link
          href={`/${item.title.toLowerCase()}`}
          className=" flex text-2xl justify-start w-fit space-x-6 items-center tansition duration-200 hover:bg-white/50 rounded-3xl px-6 py-2"
          key={index}
        >
          <div>
            <item.icon />
          </div>
          <div>{item.title != "Twitter" && <div>{item.title}</div>}</div>
        </Link>
      ))}
      <button className="w-full rounded-full bg-primary m-4   p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
        Tweet
      </button>
    </div>

    <button className=" rounded-full w-full hover:bg-white/10 flex justify-between items-center space-x-2 bg-transparent m-4   p-4  text-center hover:bg-opacity-70 transition duration-200">
      <div className="flex items-center space-x-2">
        <div className="rounded-full bg-slate-400 w-12 h-12"></div>
        <div className="text-sm text-left">
          <div className="font-semibold">Soumyaraj Bag</div>
          <div className="">@soumyarajbag</div>
        </div>
      </div>
      <div>
        <BsThreeDots />
      </div>
    </button>
  </section>
  )
}

export default LeftSideBar