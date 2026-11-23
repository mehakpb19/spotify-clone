export default function Creaidsartist() {
  const arr = [
    { artist: "Karan Aujila", roal: "Main Artist", followbtn: true },
    { artist: "Balwinder Singh", roal: "Composer", followbtn: false },
    { artist: "Jaskaran Singh Aujila", roal: "Composer", followbtn: false },
  ];

  return (
    <div className="flex flex-col gap-1 w-full">
      {arr.map((e, i) => {
        return (
          <div
            key={i}
            className="justify-between items-center px-2 hover:bg-white/20 cursor-pointer rounded py-2 w-full flex"
          >
            <div className="flex-col flex text-sm">
              <span className="font-bold">{e.artist}</span>
              <span className="text-white/40">{e.roal}</span>
            </div>

            {e.followbtn && (
              <button className="border border-white/40 rounded-full px-3 h-fit py-1 text-sm text-white">
                Following
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
