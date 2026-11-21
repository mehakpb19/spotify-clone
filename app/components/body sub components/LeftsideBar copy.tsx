"use client";

import { useState } from "react";
import LeftSidebarSlection from "./sub components/LeftSidebarSlection";
import Savedalbum from "./sub components/Savedalbum";
import SavedAlbuminbig from "./sub components/SavedAlbuminbig";

export default function LeftSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const albums = [
    {
      imgsrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
      title: "Liked Songs",
      isArtist: false,
    },
    {
      imgsrc:
        "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000dec542f14d84ce64b21f666d4c1e",
      title: "soulfull",
      isArtist: false,
    },
    {
      imgsrc:
        "https://i.scdn.co/image/ab6761610000101fa0199b159c0c5a9f62333d32",
      title: "Lata Mangeshkar",
      isArtist: true,
    },
    {
      imgsrc:
        "https://i.scdn.co/image/ab6761610000101fb9b37aaff9387b06458c867a",
      title: "Amrinder Gill",
      isArtist: true,
    },
    {
      imgsrc:
        "https://i.scdn.co/image/ab6761610000101fd1a0f104f5d36372cfa26843",
      title: "Nirvair Pannu",
      isArtist: true,
    },
    {
      imgsrc:
        "https://i.scdn.co/image/ab6761610000101fb27bbc694979e8164b6da141",
      title: "Arjan Dhillon",
      isArtist: true,
    },
    {
      imgsrc:
        "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000dec582f79184102ab9f27ecb72d0",
      title: "Liked",
      isArtist: false,
    },
    {
      imgsrc:
        "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/dw/cover/en",
      title: "Discover Weekly",
      isArtist: false,
    },
    {
      imgsrc:
        "https://i.scdn.co/image/ab6761610000101f0e03d94a7d567c5d4f73d3ed",
      title: "B Praak",
      isArtist: true,
    },
    {
      imgsrc:
        "https://i.scdn.co/image/ab6761610000101fe9ebc5af995a559c6b73f978",
      title: "Satinder Sartaaj",
      isArtist: true,
    },
    {
      imgsrc:
        "https://i.scdn.co/image/ab6761610000101fb7a5390156722883b4d10791",
      title: "Jxggi",
      isArtist: true,
    },
    {
      imgsrc:
        "https://i.scdn.co/image/ab6761610000101f7fdd268ee84c16051335791a",
      title: "Wazir Patar",
      isArtist: true,
    },
    {
      imgsrc:
        "https://mosaic.scdn.co/60/ab67616d00001e0209c9bf421422262c368009d6ab67616d00001e0228bf34ac9f7a1f213ed6d3c8ab67616d00001e02ca239f431fd5de3487a6a946ab67616d00001e02cf16de5b31c99de14dd073ca",
      title: "arjan soft",
      isArtist: false,
    },
    {
      imgsrc:
        "https://i.scdn.co/image/ab6761610000101f1b5240f39de9ee81b0348a70",
      title: "Talwiinder",
      isArtist: true,
    },
    {
      imgsrc:
        "https://i.scdn.co/image/ab6761610000101f5bc8823f5e12458215d64678",
      title: "Karan Aujla",
      isArtist: true,
    },
    {
      imgsrc:
        "https://i.scdn.co/image/ab6761610000101fe8795949450b8885f67203a4",
      title: "HUSTINDER",
      isArtist: true,
    },
    {
      imgsrc:
        "https://i.scdn.co/image/ab6761610000101fc88a25a5c35db8d0b2a67f9c",
      title: "Harkirat Sangha",
      isArtist: true,
    },
    {
      imgsrc:
        "https://i.scdn.co/image/ab67616d000011eb2520e0d8a9a8f66c7dad5d49",
      title: "Black Effect",
      isArtist: false,
    },
    {
      imgsrc:
        "https://i.scdn.co/image/ab6761610000101f0a4c28d6dc33d0f4b3469d44",
      title: "Happy Raikoti",
      isArtist: true,
    },
    {
      imgsrc:
        "https://i.scdn.co/image/ab67616d000011eb41eff047811069ddbe8fcf7e",
      title: "Hazir",
      isArtist: false,
    },
    {
      imgsrc:
        "https://i.scdn.co/image/ab6761610000101ff1ae4d91b6c0f42b51619835",
      title: "Rav Hanjra",
      isArtist: true,
    },
    {
      imgsrc:
        "https://i.scdn.co/image/ab67616d000011ebf18d2caa08aee1d4c6ca993b",
      title: "Sun Bae",
      isArtist: false,
    },
  ];
  return (
    <aside
      className={`bg-white/5 rounded-[10px] transition-all pt-1 ${
        isOpen ? "w-73 ml-2" : "w-18 flex justify-center items-center "
      }`}
    >
      {!isOpen ? (
        <div className="flex h-full  flex-col items-center">
          <div className="flex gap-4 flex-col items-center shrink-0 p-4">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Expand sidebar"
              className="group mt-2 relative inline-grid place-items-center text-neutral-400 hover:text-neutral-200 transition-colors duration-200"
            >
              <span className="col-start-1 row-start-1 transition-all duration-200 ease-in-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-90">
                <svg
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current text-white/65"
                >
                  <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866M16 4.732V20h4V7.041zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1" />
                </svg>
              </span>
              <span className="col-start-1 row-start-1 transition-all duration-200 ease-in-out opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100">
                <svg
                  role="img"
                  aria-hidden="true"
                  className="h-6 w-6 fill-current text-white/65"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.457 15.207a1 1 0 0 1-1.414-1.414L14.836 12l-1.793-1.793a1 1 0 0 1 1.414-1.414l2.5 2.5a1 1 0 0 1 0 1.414z"></path>
                  <path d="M20 22a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zM4 20V4h4v16zm16 0H10V4h10z"></path>
                </svg>
              </span>
            </button>
            <button
              type="button"
              aria-label="Add"
              className="text-2xl p-0 relative flex justify-center bg-white/6 text-neutral-400 hover:text-neutral-200 rounded-full h-9 w-9 transition-colors duration-200"
            >
              +
            </button>
          </div>
          <div className="flex flex-col  items-center flex-1 min-h-0 w-full  overflow-y-auto --webkit-scrollbar scrollbar-none scrollbar-thumb-rounded-full scrollbar-track-transparent">
            {albums.map((album, index) => (
              <Savedalbum
                key={index}
                artist={album.isArtist}
                src={album.imgsrc}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-center px-3 h-full justify-between text-white/60 pt-4 ">
          <div className="flex justify-between w-full px-2 gap-4 ">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Collapse sidebar"
              className=" rounded flex justify-center items-center gap-2"
            >
              <span className="opacity-0 -translate-x-2 transition-all duration-100 ease-out group-hover:delay-100 group-hover:opacity-100 group-hover:translate-x-0">
                <svg
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="w-4 h-4 fill-current  cursor-pointer text-neutral-400 "
                >
                  <path d="M10.97 5.47a.75.75 0 1 1 1.06 1.06L10.56 8l1.47 1.47a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06z" />
                  <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm.5 1.5H5v13H1.5zm13 13h-8v-13h8z" />
                </svg>
              </span>
              <span className="font-bold text-sm -translate-x-7 text-white  transition-transform duration-100 ease-out group-hover:translate-x-0">
                Your Library
              </span>
            </button>
            <div className="flex gap-2">
              <button className="rounded-full p-2 bg-white/5 text-white/60 cursor-pointer hover:bg-white/20 transition-colors duration-200">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75"></path>
                </svg>
              </button>
              <button className="rounded-full p-2 cursor-pointer ">
                <svg
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0" />
                </svg>
              </button>
            </div>
          </div>
          <LeftSidebarSlection />

          <div className="w-full gap-2 flex  flex-col overflow-auto --webkit-scrollbar scrollbar-none scrollbar-thumb-rounded-full scrollbar-track-transparent ">
            <div className="flex justify-between w-full ">
              <span className="hover:scale-105 hover:rounded-full hover:bg-white/10 p-2 items-center">
                <svg
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="w-4 h-4 fill-current  "
                >
                  <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7"></path>
                </svg>
              </span>
              <div className="flex group/child  h-fit gap-2 transition-all hover:scale-105 text-sm items-center">
                <span className="group-hover/child:text-white">Recents</span>
                <svg
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="w-4 h-4 fill-current rtl:scale-x-[-1] group-hover/child:text-white "
                >
                  <path d="M15 14.5H5V13h10zm0-5.75H5v-1.5h10zM15 3H5V1.5h10zM3 3H1V1.5h2zm0 11.5H1V13h2zm0-5.75H1v-1.5h2z"></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-col  ">
              {albums.map((album, index) => (
                <SavedAlbuminbig
                  key={index}
                  i={`set${index}`}
                  artist={album.isArtist}
                  src={album.imgsrc}
                  title={album.title}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
