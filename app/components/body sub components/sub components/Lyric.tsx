export default function Lyric() {
  const arr = [
    "Hey, Aujla",
    "Yeah Proof",
    "Karan, where you at?",
    "uttey dekh",
    "uhade uttey dekh, uttey kaun? uttey main",
  ];
  return (
    <>
      {arr.map((el, i) => {
        return (
          <div
            className="hover:scale-105 hover:underline cursor-pointer transmition-all duration-200 hover:text-white "
            key={i}
          >
            {el}
          </div>
        );
      })}
    </>
  );
}
