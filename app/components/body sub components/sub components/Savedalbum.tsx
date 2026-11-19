export default function Savedalbum({artist, src}:{artist:boolean, src:string}) {
    return (
        <button className="hover:bg-white/8 p-2 rounded cursor-pointer">
            <img className={`w-12 h-12 ${artist ? "rounded-full" : "rounded"} object-cover`} src={src} alt="" />
        </button>
    );
}