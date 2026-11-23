import { useState } from "react";

export default function LeftSidebarSlection() {
  const [selectedOption, setSelectedOption] = useState("nothing");

  return (
    <div className="flex w-full gap-2 text-white" >
      <button
        className={`${selectedOption === "playlist" ? "bg-white text-black" : "bg-white/10"} cursor-pointer flex items-center gap-2  py-1 px-3 rounded-full`}
        onClick={() => setSelectedOption("playlist")}
      >
        Playlist
      </button>

      <button
        className={`${selectedOption === "artist" ? "bg-white text-black" : "bg-white/10"} cursor-pointer flex items-center gap-2 py-1 px-3 rounded-full`}
        onClick={() => setSelectedOption("artist")}
      >
        Artist
      </button>

       <button
        className={`${selectedOption === "album" ? "bg-white text-black" : "bg-white/10"} cursor-pointer flex items-center gap-2 py-1 px-3 rounded-full`}
        onClick={() => setSelectedOption("album")}
      >
        Album
      </button>
    </div>
  );
}
