"use client";

import { useState } from "react";
import Savedalbum from "./sub components/Savedalbum";

export default function LeftSidebar() {
  const [isOpen, setIsOpen] = useState(false);

    const albums = [
    {
      imgsrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
      artist: false
    },
    {
      imgsrc: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000dec542f14d84ce64b21f666d4c1e",
      artist: false
    },
    {
      imgsrc: "https://i.scdn.co/image/ab6761610000101fa0199b159c0c5a9f62333d32",
      artist: true
    },
    {
      imgsrc: "https://i.scdn.co/image/ab6761610000101fb9b37aaff9387b06458c867a",
      artist: true
    },
    {
      imgsrc: "https://i.scdn.co/image/ab6761610000101fd1a0f104f5d36372cfa26843",
      artist: true
    },
    {
      imgsrc: "https://i.scdn.co/image/ab6761610000101fb27bbc694979e8164b6da141",
      artist: true
    },
    {
      imgsrc: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000dec582f79184102ab9f27ecb72d0",
      artist: false
    },
    {
      imgsrc: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/dw/cover/en",
      artist: false
    },
    {
      imgsrc: "https://i.scdn.co/image/ab6761610000101f0e03d94a7d567c5d4f73d3ed",
      artist: true
    },
    {
      imgsrc: "https://i.scdn.co/image/ab6761610000101fe9ebc5af995a559c6b73f978",
      artist: true
    },
    {
      imgsrc: "https://i.scdn.co/image/ab6761610000101fb7a5390156722883b4d10791",
      artist: true
    },
    {
      imgsrc: "https://i.scdn.co/image/ab6761610000101f7fdd268ee84c16051335791a",
      artist: true
    },
    {
      imgsrc: "https://mosaic.scdn.co/60/ab67616d00001e0209c9bf421422262c368009d6ab67616d00001e0228bf34ac9f7a1f213ed6d3c8ab67616d00001e02ca239f431fd5de3487a6a946ab67616d00001e02cf16de5b31c99de14dd073ca",
      artist: false
    },
    {
      imgsrc: "https://i.scdn.co/image/ab6761610000101f1b5240f39de9ee81b0348a70",
      artist: true
    },
    {
      imgsrc: "https://i.scdn.co/image/ab6761610000101f5bc8823f5e12458215d64678",
      artist: true
    },
    {
      imgsrc: "https://i.scdn.co/image/ab6761610000101fe8795949450b8885f67203a4",
      artist: true
    },
    {
      imgsrc: "https://i.scdn.co/image/ab6761610000101fc88a25a5c35db8d0b2a67f9c",
      artist: true
    },
    {
      imgsrc: "https://i.scdn.co/image/ab67616d000011eb2520e0d8a9a8f66c7dad5d49",
      artist: false
    },
    {
      imgsrc: "https://i.scdn.co/image/ab6761610000101f0a4c28d6dc33d0f4b3469d44",
      artist: true
    },
    {
      imgsrc: "https://i.scdn.co/image/ab67616d000011eb41eff047811069ddbe8fcf7e",
      artist: false
    },
    {
      imgsrc: "https://i.scdn.co/image/ab6761610000101ff1ae4d91b6c0f42b51619835",
      artist: true
    },
    {
      imgsrc: "https://i.scdn.co/image/ab67616d000011ebf18d2caa08aee1d4c6ca993b",
      artist: false
    }
  ];

  return (
    <aside
      className={`bg-white/3 rounded-[10px] transition-all h-full duration-300 ml-2  ${
        isOpen ? "w-80" : "w-18"
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
            <button className="text-2xl bg-white/6 text-neutral-400 hover:text-neutral-200 rounded-full h-9 w-9 textsm transition-colors duration-200">
              <span>&#x2B;</span>
            </button>
          </div>
          <div className="flex flex-col  items-center flex-1 min-h-0 w-full  overflow-y-auto --webkit-scrollbar scrollbar-none scrollbar-thumb-rounded-full scrollbar-track-transparent">
            
            {albums.map((album, index) => (
              <Savedalbum
                key={index}
                artist={album.artist}
                src={album.imgsrc}
              />
            ))}
            
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between text-white p-4 opacity-100 transition-opacity duration-800 starting:opacity-0">
          <div className="group">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Collapse sidebar"
              className="px-2 py-1 rounded flex justify-center items-center gap-2"
            >
              <span className="opacity-0 -translate-x-2 transition-all duration-100 ease-out group-hover:delay-100 group-hover:opacity-100 group-hover:translate-x-0">
                <svg
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="w-5 h-5 fill-current text-neutral-400 "
                >
                  <path d="M10.97 5.47a.75.75 0 1 1 1.06 1.06L10.56 8l1.47 1.47a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06z" />
                  <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm.5 1.5H5v13H1.5zm13 13h-8v-13h8z" />
                </svg>
              </span>
              <span className="font-medium -translate-x-7 transition-transform duration-100 ease-out group-hover:translate-x-0">
                Your Library
              </span>
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
