import "../App.css";
import GlobeComponent from "../components/GlobeComponent";
import { IoSparklesSharp } from "react-icons/io5";
import TypingAnimation from "../components/TypingAnimation";

function Home() {
  return (
    <>
      <main className="bg-thegray home-no-scroll">
        <div className="relative flex items-center justify-center min-h-screen">
          {/* Background behind other elements */}
          <div className="absolute top-[24rem] w-[45rem] h-[45rem] bg-blue-300 rounded-full filter blur-5xl opacity-50 animate-blob animation-delay-1"></div>
          <div className="absolute top-[24rem] w-[30rem] h-[30rem] bg-blue-400 rounded-full filter blur-5xl opacity-30 animate-blob animation-delay-1"></div>

          <div className="relative">
            {/* Globe behind other elements */}
            <div className="absolute flex justify-center pt-10 globe-position fade-in3">
              <GlobeComponent />
            </div>
            <div className="relative z-10 pt-0 pb-20">
              {/* Other elements */}

              {/* Main content / Hero section */}
              <div className="HomeContainer">
                <h1 className="hidden md:block text-center pb-1 lg:pl-6 pointer-events-none select-none customFont text-7xl text-gray-100 leading-[1.1] max-w-[55rem] fade-in1">
                 🎦 LIVESTREAM DVENTS
                </h1>
                <h1 className="md:hidden text-center pb-4 lg:pl-6 pointer-events-none select-none px-4 customFont text-5xl text-gray-100 leading-[1.1] max-w-[53rem]">
                 🎦 LIVESTREAM DVENTS
                  <span className="custom-text-shadow">
                    <TypingAnimation text="DISPO.SOCIAL" />
                  </span>
                </h1>

                {/* Display on larger screens */}
                <div className="pb-4 select-none text-center font-Hublot text-gray-300 text-xl max-w-[33rem] leading-20 pt-4 fade-in2">
                We throw livestream dispensary "dvents" (think d-commerce, but cooler) where snagging some fire digital merch is your golden ticket to exclusive online AND irl social gatherings 📍///KEEP.IT.SIMPLE.
                <br></br>
                🗺️ <a href="https://zap.dispo.social" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">ZAP.</a> 🌴 <a href="https://zatree.dispo.social" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">ZATREE.</a>
                🤳 <a href="https://zatv.dispo.social" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">ZATV.</a> 🪴<a href="https://products.dispo.social" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">PRODUCTS.</a>
                🗳️ <a href="https://poll.dispo.social" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">POLL.</a>
                </div>

                {/* Use <a> tag for external links */}
                <a
                  href="https://a.dispo.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono select-none get-started-button fade-in3"
                >
                  <IoSparklesSharp className="inline align-text-top" /> 🅰️ SOCIAL
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://dispo.social"
            target="_blank"
            rel="noopener noreferrer"
            className="pb-2 tracking-wider font-Hublot leading-12 jack-sheehy"
          >
            <span className="font-bold text-gray-300">DISPO.SOCIAL </span> <br />
            <span className="text-gray-400"> ©2025 </span>
          </a>
        </div>
      </main>
    </>
  );
}

export default Home;