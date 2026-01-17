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
                  🅰️ ATLANTA DIGITAL
                </h1>
                <h1 className="md:hidden text-center pb-4 lg:pl-6 pointer-events-none select-none px-4 customFont text-5xl text-gray-100 leading-[1.1] max-w-[53rem]">
                  🅰️ ATLANTA DIGITAL
                  <span className="custom-text-shadow">
                    <TypingAnimation text="ATL5D" />
                  </span>
                </h1>

                {/* Display on larger screens */}
                <div className="pb-4 select-none text-center font-Hublot text-gray-300 text-xl max-w-[33rem] leading-20 pt-4 fade-in2">
                  ATL5D is the digital-economy blueprint for uniting Atlanta's creators, businesses, and neighborhoods — powered by BLKLUV.org, the Cash App with fewer fees and limits. Subscribe to ATL5D's TikTok or subscribe to the <a href="https://discord.gg/2cY553Fj8Y" target="_blank" rel="noopener noreferrer" className="text-blue-300 transition-colors hover:text-blue-200">Camp Creek Discord</a> to promote your business on our social channels.
                  
                  <div className="my-4 space-y-2">
                    {/* Social Links Row */}
                    <div className="flex flex-wrap justify-center gap-4">
                      <span className="flex items-center gap-1">
                        📲 <a href="https://tiktok.com/@5dtok" target="_blank" rel="noopener noreferrer" className="text-blue-300 transition-colors hover:text-blue-200">@5DTOK</a>
                      </span>
                      <span className="flex items-center gap-1">
                        📲 <a href="https://tiktok.com/@campcreekmarket" target="_blank" rel="noopener noreferrer" className="text-blue-300 transition-colors hover:text-blue-200">@CAMPCREEKMARKET</a>
                      </span>
                      <span className="flex items-center gap-1">
                        💬 <a href="https://discord.gg/2cY553Fj8Y" target="_blank" rel="noopener noreferrer" className="text-blue-300 transition-colors hover:text-blue-200">Camp Creek Discord</a>
                      </span>
                      <span className="flex items-center gap-1">
                        💬 <a href="https://discord.gg/EK4wGvms3u" target="_blank" rel="noopener noreferrer" className="text-blue-300 transition-colors hover:text-blue-200">The Beltline Discord</a>
                      </span>
                      <span className="flex items-center gap-1">
                        🏦 <a href="https://blkluv.org" target="_blank" rel="noopener noreferrer" className="text-blue-300 transition-colors hover:text-blue-200">BLKLUV.ORG</a>
                      </span>
                    </div>

                    {/* Platform Links Row */}
                    <div className="flex flex-wrap justify-center gap-4">
                      <span className="flex items-center gap-1">
                        🛍️ <a href="https://shop.atl5d.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 transition-colors hover:text-blue-200">SHOP.</a>
                      </span>
                      <span className="flex items-center gap-1">
                        ⚡️ <a href="https://zstream.atl5d.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 transition-colors hover:text-blue-200">ZSTREAM.</a>
                      </span>
                      <span className="flex items-center gap-1">
                        📊 <a href="https://poll.atl5d.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 transition-colors hover:text-blue-200">POLL.</a>
                      </span>
                    </div>

                    {/* Content Links Row */}
                    <div className="flex flex-wrap justify-center gap-4">
                      <span className="flex items-center gap-1">
                        🪩 <a href="https://www.spatial.io/s/ATL5D-662eb8858ef79a2eef2b8193?share=9164371680450447654" target="_blank" rel="noopener noreferrer" className="text-blue-300 transition-colors hover:text-blue-200">CLUB ATL5D</a>
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Discord Button */}
                <a
                  href="https://discord.gg/p8J6GT5w6f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mx-auto font-mono text-center select-none get-started-button fade-in3"
                >
                  <IoSparklesSharp className="inline mr-2 align-text-top" /> DISCORD
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <a
            href="https://atl5d.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute pb-2 tracking-wider font-Hublot leading-12 jack-sheehy bottom-4"
          >
            <span className="font-bold text-gray-300">ATL5D </span> <br />
            <span className="text-gray-400"> ©2026 </span>
          </a>
        </div>
      </main>
    </>
  );
}

export default Home;