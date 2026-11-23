import LeftsideBar from "./body sub components/LeftsideBar copy";
import MainBodycontent from "./body sub components/MainBodycontent";
import RightsideBar from "./body sub components/RightsideBar";

export default function Body() {
  return (
    <div className="flex-1 gap-2 flex min-h-0">
      <LeftsideBar />
        <MainBodycontent />
      <RightsideBar />
    </div>
  );
}
