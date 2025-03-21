import "../App.css";
import { FaCity } from "react-icons/fa6";
import { GoQuestion, GoGraph, GoGitPullRequestClosed } from "react-icons/go";
import { BsGear } from "react-icons/bs";

function About() {
  return (
    <>
      <main className="bg-thegray home-no-scroll fade-in1">
        <div className="relative flex items-center justify-center min-h-screen pb-32">
          <div className="relative">
            <div className="relative z-10 pt-5 pb-20">
              <div className="pt-10 max-w-[42rem] px-5">
                <h1 className="pb-2 text-4xl font-bold text-left text-white font-Mona leading-20 ">
                  <GoQuestion className="inline text-4xl align-bottom" /> About 🌱WEED📍W3W
                </h1>
                <div className="pt-4 pb-4 text-lg text-left text-gray-300  font-Hublot leading-20">
                    High-tech meets high times WEEDW3W is the first blockchain-powered cannabis ad agency, connecting brands, dispensaries, and influencers with a Web5-native audience.
                  <p className="pt-2 text-lg text-left text-gray-300 font-Hublot leading-20">
                    WEEDW3W converts customers to dispensary content creators with fun marketing campaigns using ADS customers can securely sell and stake to earn from supporting
                    their favorite local dispensary in a gamified way to earn memecoin loyalty rewards tokens that can be redeemed easily.
                  </p>
                </div>
                <h1 className="pt-10 pb-2 text-4xl font-bold text-left text-white font-Mona leading-20 ">
                  <BsGear className="inline align-bottom " /> HOW 🌱 🅰️DS WORK
                </h1>
                <div className="pt-4 pb-4 text-lg text-left text-gray-300  font-Hublot leading-20">
                  <h2 className="pb-2 text-xl font-bold text-white">1️⃣ Go See the Wizard of Hahz</h2>
                  Kick things off by booking a consultation with the founder and creator of WEEDW3W—available for a limited time only until we onboard the first 💯 dispensaries.
                  <h2 className="pt-4 pb-2 text-xl font-bold text-white">2️⃣ CT🅰️</h2>
                  We announce the the CT🅰️ (Call to action) date for your customers to be prepared to complete the 
                  <h2 className="pt-4 pb-2 text-xl font-bold text-white">3️⃣ 🅰️NALYTICS</h2>
                  Customers can easily redeem or verify ownership of 🅰️DS in-store by either showing the 🅰️D to a merchant or transferring it to their Phantom Wallet account.
                </div>
                <h1 className="pt-10 pb-2 text-4xl font-bold text-left text-white font-Mona leading-20 ">
                  <GoGraph className="inline align-bottom" /> Benefits for Developers
                </h1>
                <div className="pt-4 pb-4 text-lg text-left text-gray-300  font-Hublot leading-20">
                  <h2 className="pb-1 text-xl font-bold text-white">• Networking Opportunities</h2>
                  Connect with peers locally and globally. This can lead to collaborative projects, mentorship opportunities, and potentially career advancements.{" "}
                  <h2 className="pt-4 pb-1 text-xl font-bold text-white">• Increased Visibility</h2>
                  By showcasing their skills and projects, developers can gain recognition within their local community and beyond. This visibility can be crucial for freelance
                  developers or those seeking new career opportunities.
                  <h2 className="pt-4 pb-1 text-xl font-bold text-white">• Community Awareness</h2>
                  Keeps developers in tune with their local tech community by providing insights into the top developers, helping users stay connected and engaged with regional
                  tech trends and opportunities.
                  <h2 className="pt-4 pb-1 text-xl font-bold text-white">• Collaboration</h2>
                  For those looking to build a team or collaborate on projects, GeoGit's ability to focus on local talent simplifies the search for compatible and skilled partners.{" "}
                </div>{" "}
                <h1 className="pt-10 pb-2 text-4xl font-bold text-left text-white font-Mona leading-20 ">
                  <GoGitPullRequestClosed className="inline align-bottom" /> What Makes GeoGit Different?
                </h1>
                <div className="pt-4 pb-4 text-lg text-left text-gray-300  font-Hublot leading-20">
                  <h2 className="pb-1 text-xl font-bold text-white">• Scope & Focus</h2>
                  Unlike LinkedIn, GitHub or Crunchbase, which generally focus on the big picture, GeoGit can emphasize local software development communities, offering a unique
                  lens into regional talent and trends. <h2 className="pt-4 pb-1 text-xl font-bold text-white">• Objective Metrics</h2>
                  GeoGit uses a combination of followers, public repositories, and commits to objectively rank developers. This differs from LinkedIn, where visibility often
                  depends on networking skills, or GitHub, where activity isn't always a reflection of influence or skill.
                  <h2 className="pt-4 pb-1 text-xl font-bold text-white">• Developer Profiles</h2>
                  While platforms like GitHub focus primarily on code repositories, GeoGit provides a more holistic view of a developer, including their social media presence,
                  which offers a more rounded perspective on their professional persona.
                  <h2 className="pt-4 pb-1 text-xl font-bold text-white">• Ease of Use</h2>
                  GeoGit simplifies the process of finding leading developers in a specific region, a task that can be challenging on more generalized platforms like LinkedIn. The
                  platform also accomadates for technical and non-technical users alike.
                </div>{" "}
              </div>
            </div>
          </div>

          <a href="https://remise.ie" target="_blank" rel="noopener noreferrer" className="pb-2 leading-5 tracking-wider text-white font-Hublot jack-sheehy">
            Built by REMISE <br />
            ©2023
          </a>
        </div>
      </main>
    </>
  );
}
export default About;
