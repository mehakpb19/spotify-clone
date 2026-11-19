"use client";

import { useState } from "react";

export default function RightsideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`bg-white/5 rounded-[10px] p-4 transition-all duration-300 group ${
        isOpen ? "w-72 mr-2" : "w-10 flex justify-center items-center hover:w-16"
      }`}
    >
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Expand sidebar"
          className=" group-hover:text-white text-white/80 flex items-start justify-center transition-all duration-300"
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
        <div className="flex items-center justify-between text-white">
          <span className="font-medium">Your Library</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Collapse sidebar"
            className="px-2 py-1 rounded"
          >
            <svg
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="w-4 h-4 fill-current text-neutral-400 hover:text-white transition-colors rtl:scale-x-[-1]"
            >
              <path d="M5.03 10.53a.75.75 0 1 1-1.06-1.06L5.44 8 3.97 6.53a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06z" />
              <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm.5 1.5h8v13h-8zm13 13H11v-13h3.5z" />
            </svg>
          </button>
        </div>
      )}
    </aside>
  );
}
