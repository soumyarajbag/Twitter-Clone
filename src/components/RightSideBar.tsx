import { BsSearch } from "react-icons/bs";

const RightSideBar = () => {
  return (
    <section className="right w-[30%] sticky top-0  mt-4 overflow-y-scroll  flex flex-col items-stretch h-screen  px-6 ">
          <div>
            <div className="relative  w-full h-full space-x-2 group">
              <input
                type="text"
                id="searchBox"
                placeholder="Search Twitter"
                className="peer  pl-14 focus:outline-primary  bg-neutral-900/90  w-full h-full rounded-xl px-6 py-4"
              />
              <label
                htmlFor="searchBox"
                className="absolute peer-focus:text-primary top-0 left-0 h-full flex items-center justify-center px-4"
              >
                <BsSearch className="w-5 h-5 " />
              </label>
            </div>
          </div>

          <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
            <h3 className="font-bold text-xl px-4 mt-4 mb-2 ">
              What's Happening ?
            </h3>
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200 cursor-pointer"
                >
                  <div className="font-bold text-lg">#Trending {i + 1}</div>
                  <div className="text-sm text-neutral-400">35.4K Tweets</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
            <h3 className="font-bold text-xl px-4 mt-4 mb-2 ">
              Who to Follow ?
            </h3>
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="hover:bg-white/10 justify-evenly px-6 py-3 space-x-4 flex items-center  last:rounded-b-xl transition duration-200 cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-neutral-600 rounded-full flex-none"></div>
                    <div className="flex flex-col items-center w-full">
                      <div className="font-bold text-white">Other User</div>
                      <div className="text-gray-500 text-xs">@otheruser</div>
                    </div>
                  </div>

                  <div className=" w-full pl-10">
                    <button className="rounded-full  px-6 py-2 bg-white text-neutral-950">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default RightSideBar