export default function Savedalbum({artist, src}:{artist:boolean, src:string}) {
    return (
        <button className="">
            <img className={`w-12 ${artist ? "rounded-full" : "rounded"}`} src={src} alt="" />
        </button>
    );
}