import React from 'react'
import { BsDot , BsChat , BsThreeDots } from "react-icons/bs";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { IoStatsChart, IoShareOutline } from "react-icons/io5";
const MainComponents = () => {
  return (
    <main className=" mx-2 w-[50%]   flex  h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
    <h1 className="text-xl font-bold  p-6 backdrop-blur bg-black/10 sticky top-0">Home</h1>
    <div className="border-t-[0.5px] border-b-[0.5px] px-4 border-gray-600  py-4 relative flex items-stretch space-x-2">
      <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
      <div className="flex flex-col w-full h-full">
        <input
          type="text"
          className="w-full h-full font-semibold text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 border-none outline-none"
          placeholder="What's Happening ?"
        />

        <div className="w-full justify-between items-center flex">
          <div></div>
          <div className="w-full max-w-[100px]">
            <button className=" rounded-full bg-primary py-2 w-full  px-4 text-lg text-center hover:bg-opacity-70  transition duration-200 font-bold">
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="border-b-[0.5px] border-gray-600 py-4 px-6  flex space-x-4"
        >
          <div>
            <div className="w-10 h-10 bg-slate-200 rounded-full" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center my-1 w-full">
             <div className="flex items-center space-x-1 w-full">
             <div className="font-bold">Soumyaraj Bag</div>
              <div className="text-gray-500">@soumyarajbag</div>
              <div className="text-gray-500">
                <BsDot />
              </div>
              <div className="text-gray-500">1 hour ago</div>
              
             </div>
             <div>
                <BsThreeDots />
              </div>
            </div>
            <div className="text-white text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia est reiciendis, totam fugiat suscipit atque eaque
              reprehenderit eius placeat rem facilis molestias, at optio
              cum incidunt exercitationem. Adipisci consequatur dolorum
              vitae, iste, porro fugit similique cum ad perferendis
              cupiditate excepturi voluptas quod molestiae voluptatum
              inventore dolorem soluta! Alias quos omnis repellat nulla,
              illum ut minima facilis maiores ad unde nesciunt beatae
              rerum sint dolores necessitatibus accusamus quaerat hic
              laudantium ducimus labore ipsam? Eius nemo recusandae quasi
              pariatur porro delectus amet tempore. Corrupti reprehenderit
              repellat deleniti veritatis delectus sint placeat nihil,
              ipsum molestiae quae alias tempora eligendi officia rerum
              minus quidem.
            </div>
            <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl mt-2">

            </div>

            <div className="flex items-center justify-start space-x-20 mt-2 w-full">
              <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><BsChat /></div>
              <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><AiOutlineRetweet /></div>
              <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><AiOutlineHeart /></div>
              <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><IoStatsChart /></div>
              <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><IoShareOutline /></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </main>
  )
}

export default MainComponents