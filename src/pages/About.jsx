import "../App.css";
import { BsGear } from "react-icons/bs";
import { GoGitPullRequestClosed } from "react-icons/go";
import { IoSparklesSharp } from "react-icons/io5"; // Correct import for sparkles icon

function About() {
  return (
    <>
      <main className="bg-thegray home-no-scroll fade-in1">
        <div className="relative flex items-center justify-center min-h-screen pb-32">
          <div className="relative">
            <div className="relative z-10 pt-5 pb-20">
              <div className="pt-10 max-w-[42rem] px-5">
                <h1 className="pb-2 text-4xl font-bold text-left text-white font-Mona leading-20">
                  About 🌱WEED📍W3W
                </h1>
                <div className="pt-4 pb-4 text-lg text-left text-gray-300 font-Hublot leading-20">
                  <p>
                    WEEDW3W is pioneering the next generation of cannabis marketing, powered by blockchain and AI tech.
                    We empower dispensaries with unique digital assets called 'Z🅰️DDYs,' bridging the gap between the digital and physical cannabis experience.
                  </p>
                  <p className="pt-2 text-lg text-left text-gray-300 font-Hublot leading-20">
                    By partnering with What3Words, we've linked these Z🅰️DDYs to precise 4m x 4m W3W 3-word real-world locations ///keep.it.simple.
                  </p>
                </div>

                <h1 className="pt-10 pb-2 text-4xl font-bold text-left text-white font-Mona leading-20">
                  <BsGear className="inline align-bottom" /> HOW 🌱 Z🅰️DDYs WORK
                </h1>
                <div className="pt-4 pb-4 text-lg text-left text-gray-300 font-Hublot leading-20">
                  <h2 className="pb-2 text-xl font-bold text-white">
                    1️⃣ Go See the Wizard of Hahz
                  </h2>
                  Kick things off by booking a consultation with the founder and creator of WEEDW3W—available for a limited time only until we onboard the first 💯 dispensaries.
                  Summons <a href="https://t.me/hahznft" target="_blank" rel="noopener noreferrer">@HAHZNFT</a> on Telegram.
                </div>

                <h1 className="pt-10 pb-2 text-4xl font-bold text-left text-white font-Mona leading-20">
                  <GoGitPullRequestClosed className="inline align-bottom" /> What Makes WEEDW3W Different from WeedMaps?
                </h1>
                <div className="pt-4 pb-4 text-lg text-left text-gray-300 font-Hublot leading-20">
                  <h2 className="pb-1 text-xl font-bold text-white">
                    🔥 HYPER-PRECISE LOCATION TECH
                  </h2>
                  Unlike WeedMaps, which charges $500 for dispensary listings, WEEDW3W lists them for free!
                </div>

                {/* BUTTON FIXED */}
                <div className="flex justify-center pt-6">
                  <a
                    href="https://tree.weedw3w.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 text-lg font-bold text-white transition duration-300 bg-green-600 rounded-lg shadow-lg hover:bg-green-700"
                  >
                    <IoSparklesSharp className="text-2xl" /> Tree
                  </a>
                </div>

                {/* FOOTER FIXED */}
                <div className="pt-6 text-center">
                  <a
                    href="https://remise.ie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-5 tracking-wider text-white font-Hublot"
                  >
                    Made with 🫶 by WEEDW3W <br />
                    ©2025
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;

