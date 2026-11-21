export default function SavedAlbuminbig({
  artist,
  src,
  title,i,
}: {
  artist: boolean;
  src: string;
  title: string;
  i:string;
}) {
  return (
    <button className={`hover:bg-white/8 group/items p-2 gap-3  relative w-full rounded cursor-pointer flex items-start`}>
      <div className="absolute z-2 inset-0 hover:bg-black/50"></div>
      <div className="relative h-fit w-fit">
        <img
          className={`w-12 h-12 ${artist ? "rounded-full" : "rounded"} object-cover`}
          src={src}
          alt=""
        />
        <span className={`absolute fill-current z-10 opacity-0 group-hover/items:opacity-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
          <svg
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="w-6 h-6 "
          >
            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606" />
          </svg>
        </span>
      </div>
      <div className="flex flex-col  items-start">
        <span className="text-white font-semibold">{title}</span>
        <span>
          {artist === true ? (
            "artist"
          ) : (
            <span className="flex items-center gap-1">
              <svg
                role="img"
                aria-label="Pinned"
                viewBox="0 0 16 16"
                className="w-3 h-3 fill-current text-green-500"
              >
                <title>Pinned</title>
                <path d="M8.822.797a2.72 2.72 0 0 1 3.847 0l2.534 2.533a2.72 2.72 0 0 1 0 3.848l-3.678 3.678-1.337 4.988-4.486-4.486L1.28 15.78a.75.75 0 0 1-1.06-1.06l4.422-4.422L.156 5.812l4.987-1.337z" />
              </svg>
              Playlist
            </span>
          )}
        </span>
      </div>
    </button>
  );
}
