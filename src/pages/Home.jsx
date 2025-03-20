import "../App.css";
import GlobeComponent from "../components/GlobeComponent";
import { Link } from "react-router-dom";
import { IoSparklesSharp } from "react-icons/io5";
import { GoPeople, GoGitPullRequest, GoRepo, GoStar } from "react-icons/go";

import TypingAnimation from "../components/TypingAnimation";

function Home() {
  return (
    <>
      <main className="bg-thegray home-no-scroll ">
        <div className="relative flex items-center justify-center min-h-screen ">
          {/*Background behind other elemetns */}
          <div className="absolute top-[24rem]  w-[45rem] h-[45rem] bg-blue-300 rounded-full filter blur-5xl opacity-50 animate-blob animation-delay-1"></div>
          <div className="absolute top-[24rem]  w-[30rem] h-[30rem] bg-blue-400 rounded-full filter blur-5xl opacity-30 animate-blob animation-delay-1"></div>

          <div className="relative">
            {/* Globe behind other elements*/}
            <div className="absolute flex justify-center pt-10 globe-position fade-in3">
              <GlobeComponent />
            </div>
            <div className="relative z-10 pt-0 pb-20">
              {/* Other elements */}

              {/*Main content / Hero section */}
              <div className="HomeContainer ">
                <h1 className="hidden md:block text-center pb-1 lg:pl-6 pointer-events-none select-none customFont text-7xl text-gray-100 leading-[1.1] max-w-[55rem] fade-in1">
                  We're bigger <span className="pr-10">than</span><span className="pl-5">a</span> map.
                </h1>

                <h1 className="md:hidden text-center pb-4 lg:pl-6 pointer-events-none select-none px-4 customFont text-5xl text-gray-100 leading-[1.1] max-w-[53rem ]">
                  We use AI, SMS, Blockchain and AR tech to create fun <span className="custom-text-shadow">🅰️DS.</span>.
                </h1>

                {/* Display on larger screens */}
                <div className=" pb-4 select-none text-center font-Hublot text-gray-300 text-xl max-w-[33rem] leading-20 pt-4 fade-in2">
                  Livestream shopping gamified with @ZAZAW3W customer content. We create 🅰️DS for{" "}
                  <span className="text-white">
                    <GoPeople className="inline align-text-bottom" /> merch
                  </span>
                  ,{" "}
                  <span className="text-white">
                    <GoStar className="inline align-text-bottom" /> loyalty
                  </span>
                  ,{" "}
                  <span className="text-white">
                    <GoGitPullRequest className="inline align-text-bottom" /> challenges
                  </span>{" "}
                  and{" "}
                  <span className="text-white">
                    <GoRepo className="inline align-text-bottom" /> education.
                  </span>
                </div>

                <Link to="https://tiktok.com/zazaw3w" className="font-mono select-none get-started-button fade-in3">
                  <IoSparklesSharp className="inline align-text-top" /> Follow @ZAZAW3W TikTok
                </Link>
              </div>
            </div>
          </div>

          <a href="https://remise.ie" target="_blank" rel="noopener noreferrer" className="pb-2 tracking-wider font-Hublot leading-12 jack-sheehy">
            <span className="font-bold text-gray-300">WEEDW3W </span> <br />
            <span className="text-gray-400"> ©2025 </span>
          </a>
        </div>
      </main>
    </>
  );
}
export default Home;
