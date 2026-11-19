import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function page() {
  return (
    <div className="flex flex-col h-screen justify-between text-white overflow-clip">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}