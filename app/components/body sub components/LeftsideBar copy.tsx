"use client";

import { useState } from "react";
import Savedalbum from "./sub components/Savedalbum";

export default function LeftSidebar() {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="flex flex-col gap-4 items-center flex-1 min-h-0 w-full p-2 overflow-y-auto --webkit-scrollbar scrollbar-none scrollbar-thumb-rounded-full scrollbar-track-transparent">
            <Savedalbum artist={false} src="https://misc.scdn.co/liked-songs/liked-songs-64.png" />
            <Savedalbum artist={false} src="https://misc.scdn.co/liked-songs/liked-songs-64.png" />
            <Savedalbum artist={false} src="https://misc.scdn.co/liked-songs/liked-songs-64.png" />
            <Savedalbum artist={false} src="https://misc.scdn.co/liked-songs/liked-songs-64.png" />
            <Savedalbum artist={false} src="https://misc.scdn.co/liked-songs/liked-songs-64.png" />
            <Savedalbum artist={false} src="https://misc.scdn.co/liked-songs/liked-songs-64.png" />
            <Savedalbum artist={false} src="https://misc.scdn.co/liked-songs/liked-songs-64.png" />
            <Savedalbum artist={false} src="https://misc.scdn.co/liked-songs/liked-songs-64.png" />
            <Savedalbum artist={false} src="https://misc.scdn.co/liked-songs/liked-songs-64.png" />
            <Savedalbum artist={false} src="https://misc.scdn.co/liked-songs/liked-songs-64.png" />
            <Savedalbum artist={false} src="https://misc.scdn.co/liked-songs/liked-songs-64.png" />
            <Savedalbum artist={false} src="https://misc.scdn.co/liked-songs/liked-songs-64.png" />
            <Savedalbum artist={false} src="https://misc.scdn.co/liked-songs/liked-songs-64.png" />
            <Savedalbum artist={false} src="https://misc.scdn.co/liked-songs/liked-songs-64.png" />
            <Savedalbum artist={false} src="https://misc.scdn.co/liked-songs/liked-songs-64.png" />
            <Savedalbum artist={false} src="https://misc.scdn.co/liked-songs/liked-songs-64.png" />
          </div>
        </div>

      ) : (
        <div className="flex items-center justify-between text-white p-4 opacity-100 transition-opacity duration-800 starting:opacity-0">
          <div className="group">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Collapse sidebar"
              className="px-2 py-1 rounded flex justify-center  items-center gap-2"
            >
              <svg
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="w-5 h-5 fill-current text-neutral-400 opacity-0 -translate-x-2 transition-all duration-100 ease-out group-hover:delay-100 group-hover:opacity-100 group-hover:translate-x-0"
              >
                <path d="M10.97 5.47a.75.75 0 1 1 1.06 1.06L10.56 8l1.47 1.47a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06z" />
                <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm.5 1.5H5v13H1.5zm13 13h-8v-13h8z" />
              </svg>
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
