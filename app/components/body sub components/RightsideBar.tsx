"use client";

import { useState } from "react";
import Creaidsartist from "./sub components/Creaidsartist";
import Lyric from "./sub components/Lyric";

export default function RightsideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`bg-white/3 rounded-[10px] transition-all duration-300 py-2 group ${
        isOpen
          ? "w-73 mr-2"
          : "w-10 flex justify-center items-center hover:w-16"
      }`}
    >
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Expand sidebar"
          className=" group-hover:text-white h-full w-full text-white/80 flex items-center justify-center transition-all duration-300"
        >
          <svg
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="w-4 h-4 fill-current rtl:rotate-180"
          >
            <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0" />
          </svg>
        </button>
      ) : (
        <div className="flex h-full flex-col gap-4 p-4 text-white">
          <div className="flex justify-between">
            <div className="flex">
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
                    className="w-4 h-4 fill-current text-neutral-400  cursor-pointer hover:text-white transition-colors rtl:scale-x-[-1]"
                  >
                    <path d="M5.03 10.53a.75.75 0 1 1-1.06-1.06L5.44 8 3.97 6.53a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06z" />
                    <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm.5 1.5h8v13h-8zm13 13H11v-13h3.5z" />
                  </svg>
                </span>
              </button>
              <button className="hover:text-white text-sm hover:underline cursor-pointer font-bold -translate-x-7 transition-transform duration-200 ease-out group-hover:translate-x-0">
                <span>Liked Songs</span>
              </button>
            </div>
            <div className="flex gap-5 opacity-0 transform-all duration-300 group-hover:opacity-100 items-center px-2">
              <span>
                <svg
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                </svg>
              </span>
              <span>
                <svg
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0" />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 overflow-y-auto h-full --webkit-scrollbar scrollbar-none scrollbar-thumb-rounded-full scrollbar-track-transparent">
            <button className="rounded-xl  cursor-pointer">
              <img
                className="rounded-xl"
                src="https://i.scdn.co/image/ab67616d0000aa542b73d66e5ddfc2e58c5c6f1b"
                alt=""
              />
            </button>

            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-2xl font-black">On Top</span>
                <span className="text-white/60">Karan Aujila</span>
              </div>

              <div className="flex gap-2">
                <span className="translate-x-5 opacity-0 transmition-all duration-250 group-hover:translate-x-0 group-hover:opacity-100">
                  <svg
                    xmlns="http://w3.org"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4 text-white/60 "
                  >
                    <path d="M1 5.75A.75.75 0 0 1 1.75 5H4v1.5H2.5v8h11v-8H12V5h2.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75z" />
                    <path d="M8 9.576a.75.75 0 0 0 .75-.75V2.903l1.454 1.454a.75.75 0 0 0 1.06-1.06L8 .03 4.735 3.296a.75.75 0 0 0 1.06 1.061L7.25 2.903v5.923c0 .414.336.75.75.75" />
                  </svg>
                </span>
                <span>
                  <svg
                    role="img"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="w-4 h-4 fill-green-500"
                  >
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="bg-[#003946] relative overflow-clip text-[#73DCEC] flex flex-col px-4 rounded-2xl ">
              <span className="text-white font-semibold py-5">
                Lyrics preview
              </span>
              <span className="pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0)_80%,rgba(0,0,0,0.50)_100%)] inset-0 absolute z-10 " />
              <div className="text-2xl gap-3 flex flex-col py-2 font-bold">
                <Lyric />
              </div>
            </div>

            <div className="bg-[#1F1F1F]  flex flex-col gap-2 overflow-clip rounded-xl ">
              <div className="h-40 relative items-center justify-center flex">
                <span className="absolute top-3 left-3 font-bold z-5">
                  About the artist
                </span>
                <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0.20)_100%)] z-4"></span>
                <img
                  className="scale-150 "
                  src="https://i.scdn.co/image/ab6761860000101642c6af78b865fe6421bbc6b4"
                  alt=""
                />
              </div>

              <div className="px-2 text-white">
                <div className="text-sm font-black flex gap-2 items-center">
                  <span>Karan Aujila</span>
                  <span>
                    <svg
                      role="img"
                      aria-label="Verified account"
                      viewBox="0 0 16 16"
                      className="w-4 h-4 fill-current text-[#C5F0C9] "
                    >
                      <title>Verified account</title>
                      <path d="M7.155.406a1.18 1.18 0 0 1 1.69 0L10.46 2.06l2.312-.027a1.18 1.18 0 0 1 1.195 1.194L13.94 5.54l1.654 1.615a1.18 1.18 0 0 1 0 1.69L13.94 10.46l.027 2.312a1.18 1.18 0 0 1-1.195 1.195l-2.312-.027-1.615 1.654a1.18 1.18 0 0 1-1.69 0L5.54 13.94l-2.312.027a1.18 1.18 0 0 1-1.195-1.195l.027-2.312L.406 8.845a1.18 1.18 0 0 1 0-1.69L2.06 5.54l-.027-2.313a1.18 1.18 0 0 1 1.195-1.194l2.312.027zm4.503 6.067a.75.75 0 0 0-1.06-1.06L6.647 9.36 5.446 8.157a.75.75 0 1 0-1.06 1.06l2.264 2.265z"></path>
                    </svg>
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex-col flex text-white/60 py-2 pr-8  ">
                    <span>18,067,977 monthly listeners</span>
                  </div>
                  <div>
                    <button className="border border-white/40 rounded-full px-3 py-1.5 text-white">
                      Following
                    </button>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-white/60">
                    Born in Ghurala, India, Karan Aujla began song writing as a
                    means of coping with the loss of his...
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#1F1F1F]  rounded-2xl px-2  gap-2 flex flex-col py-5">
              <div className="flex justify-between px-2">
                <span className="font-bold">Credits</span>
                <span className="text-sm text-white/40 font-bold">
                  Show all
                </span>
              </div>
              <div>
                <Creaidsartist />
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
