"use client";

import { useState } from "react";

export default function RightsideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`bg-white/5 rounded-[10px] transition-all duration-300 py-2 group ${
        isOpen
          ? "w-70 mr-2"
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
        <div className="flex items-center  p-4 text-white">
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
          <button className="hover:text-white text-sm hover:underline cursor-pointer font-bold -translate-x-7 transition-transform duration-100 ease-out group-hover:translate-x-0">
            <span>Liked Songs</span>
          </button>
        </div>
      )}
    </aside>
  );
}
