"use client";
import { useRef } from "react";

export default function MainBodycontent() {
  const containerref = useRef(null);
  const playlists = [
    {
      title: "Liked Songs",
      imgUrl: "https://misc.scdn.co/liked-songs/liked-songs-640.jpg",
    },
    {
      title: "Daily Mix 1",
      imgUrl:
        "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/1/ab6761610000e5ebb27bbc694979e8164b6da141/en",
    },
    {
      title: "soulfull",
      imgUrl:
        "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c42f14d84ce64b21f666d4c1e",
    },
    {
      title: "TOP ENGLISH SONGS OF ALL TIME🔥♥️😍‼",
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d00001e021192ae62dfe52262a3cc3fedab67616d00001e021b11100917617bd2a75396afab67616d00001e02459d675aa0b6f3b211357370ab67616d00001e024dbf782532ca5d09012dc2d5",
    },
    {
      title: "English popular songs raps",
      imgUrl:
        "https://mosaic.scdn.co/640/ab67616d00001e0204481c826dd292e5e4983b3fab67616d00001e027438996f6fe67c59d75d4e43ab67616d00001e02820b43679aab8d3b47001f9cab67616d00001e02d9afe5c70c43cb2bd34605ea",
    },
    {
      title: "super fav s",
      imgUrl:
        "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000d72c53c493fb42693e39f1a18f0b",
    },
    {
      title: "Hip Hop Mix",
      imgUrl:
        "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/topic/hip_hop/5r3wPya2PpeTTsXsGhQU8O/en",
    },
    {
      title: "Hot Hits Punjabi",
      imgUrl:
        "https://i.scdn.co/image/ab67706f00000002fecf874aa8e0443bc124da5c",
    },
  ];

  const madeForYou = [
    {
      title:
        "Your shortcut to hidden gems, deep cuts, and future faves, updated every Monday. You’ll know when you hear it.",
      imgUrl:
        "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/dw/cover/en",
    },
    {
      title: "Cheema Y, Sidhu Moose Wala, AP Dhillon and more",
      imgUrl:
        "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/2/ab6761610000e5eb8acd9439506d057719cb4446/en",
    },
    {
      title: "Nimrat Khaira, Amrinder Gill, Gurnam Bhullar and more",
      imgUrl:
        "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/3/ab6761610000e5eb573396c5c4dc893a7363e128/en",
    },
    {
      title: "Amrit Maan, Diljit Dosanjh, Jordan Sandhu and more",
      imgUrl:
        "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/4/ab6761610000e5eba338ab0c2877f4c1f0538314/en-GB",
    },
    {
      title: "Shubh, Real Boss, Baggh-e SMG and more",
      imgUrl:
        "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/5/ab6761610000e5eb9dfbd284ba8a7d4876a181e3/en",
    },
    {
      title: "Pardeep Sran, Yo Yo Honey Singh, Anuv Jain and more",
      imgUrl:
        "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/6/ab6761610000e5eb3c0e36ccbbf92873f0be5ba0/en",
    },
    {
      title:
        "Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday.",
      imgUrl:
        "https://pickasso.spotifycdn.com/image/ab67c0de0000bada/dt/v1/img/release-radar-v4/3fn50P81Whm1meTnMmS8zX/en",
    },
  ];

  return (
    <div className="overflow-y-auto scroll-smooth --webkit-scrollbar scrollbar-none scrollbar-thumb-rounded-full scrollbar-track-transparent flex flex-col @container px-8 gap-5 min-w-0 flex-1 p-4 rounded-[10px] bg-[#707070] bg-linear-to-b from-[#4b4b4b] from-[-100%] to-[#121212] to-60%">
      <div className="flex gap-2 font-bold text-[13px] *:px-3 *:py-1.5 *:bg-white/13 *:rounded-full">
        <span className="bg-white! text-black">All</span>
        <span>Music</span>
        <span>Podcasts</span>
        <span>Audiobooks</span>
      </div>

      <div className="grid w-full grid-cols-2   @min-[900px]:grid-cols-4 gap-2.5">
        {playlists.map((e, i) => {
          return (
            <div
              key={i}
              className="overflow-hidden min-w-0 rounded gap-3 cursor-pointer bg-white/10 hover:bg-white/15 flex items-center"
            >
              <img
                className="size-12 @min-[1000px]:size-17 transition-all duration-200 shrink-0 object-cover"
                src={e.imgUrl}
                alt={e.title}
              />
              <span className="font-bold  text-[13px] transition-all duration-200 @min-[1000px]:text-[15px] line-clamp-2 pr-3">
                {e.title}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col group gap-4">
        <div className="flex-col flex text-sm text-white/50">
          <span>Made For</span>
          <span className="text-white font-bold text-2xl">sura</span>
        </div>
        <div className="relative">
          <div className="absolute items-center pointer-events-none h-full group-hover:bg-[linear-gradient(80deg,rgba(0,0,0,0.2)_0%,rgba(255,255,255,0)_20%,rgba(255,255,255,0)_80%,rgba(0,0,0,0.2)_100%)]  z-10 flex gap-5 w-full top-1/2 -translate-y-1/2 justify-between *:outline-none *:rounded-full *:p-1.5 *:px-3 *:h-fit *:text-lg *:text-white/80 *:bg-black/50">
            <button
              onClick={() => {
                containerref.current?.scrollBy({
                  left: -250,
                  behavior: "smooth",
                });
              }}
            >
              {"<"}
            </button>
            <button
              onClick={() => {
                containerref.current?.scrollBy({
                  left: 250,
                  behavior: "smooth",
                });
              }}
            >
              {">"}
            </button>
          </div>
          <div ref={containerref} className="flex gap-5  overflow-x-auto">
            {madeForYou.map((e, i) => {
              return (
                <div
                  key={i}
                  className=" min-w-40 text-sm rounded-md overflow-hidden text-white/75 flex flex-col gap-3"
                >
                  <img src={e.imgUrl} alt="" />
                  <span className="line-clamp-2">{e.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
