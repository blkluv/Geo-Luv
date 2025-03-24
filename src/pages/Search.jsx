import React, { useState, useEffect } from "react";
import TopGithubUsers from "../components/TopGitHubUsers";
import { useNavigate, useLocation } from "react-router-dom";
import { GoPeople, GoRepo, GoGitPullRequest, GoStar } from "react-icons/go";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../components/dialog";

function Search({ isAuthenticated }) {
  const [city, setCity] = useState("");
  const [coordinates, setCoordinates] = useState([45, 10]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cityFromURL = params.get("city");
    if (cityFromURL) {
      setCity(cityFromURL);
    }
  }, [location]);

  const handleCityChange = (selectedCity, coords) => {
    setCity(selectedCity);
    setCoordinates(coords);
    navigate(`?city=${selectedCity}`);
  };

  // Function to handle the What3Words search
  const handleW3WSearch = (event) => {
    if (event.key === "Enter") {
      const words = event.target.value.trim();
      if (words) {
        // Use What3Words API (Ensure you've loaded the script and replaced API_KEY)
        fetch(`https://api.what3words.com/v3/convert-to-coordinates?words=${words}&key=YOUR_API_KEY`)
          .then((response) => response.json())
          .then((data) => {
            if (data.coordinates) {
              const { lat, lng } = data.coordinates;
              setCity(words);
              setCoordinates([lng, lat]);
            } else {
              alert("Invalid What3Words address.");
            }
          })
          .catch(() => alert("Error fetching What3Words location."));
      }
    }
  };

  return (
    <>
      <main className="relative bg-thegray">
        <div className="fixed w-full max-w-lg right-64">
          <div className="absolute top-16 -right-12 w-[40rem] h-[40rem] bg-blue-300 rounded-full filter blur-5xl opacity-30 animate-blob animation-delay-1"></div>{" "}
          <div className="absolute top-64 right-20 w-[30rem] h-[30rem] bg-blue-400 rounded-full filter blur-5xl opacity-20 animate-blob animation-delay-1"></div>{" "}
        </div>

        <div className="relative flex flex-col items-start justify-center px-4 pb-0 md:px-8 lg:px-32">
          <div className="pt-6 pb-6">
            <h1 className="pb-2 text-5xl font-bold text-white select-none font-Mona leading-20 fade-in1">Search</h1>
            <div className="flex select-none">
              <p className="font-Hublot select-none text-gray-300 mr-4 max-w-[28rem] leading-[1.7rem] fade-in2">
                Start by entering a What3Words location (e.g., apple.banana.orange). This will center the map and load coordinates.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <Dialog>
              <DialogTrigger>
                <div className="fade-in1 mb-4 mr-4 px-3.5 py-[0.4rem] rounded-[0.5rem] bg-transparent   text-white border border-gray-300 hover:border-gray-500 transition ease-in-out">
                  ?
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-xs pointer-events-none select-none rounded-s fade-in2">
                <p className="text-lg text-gray-300 font-Hublot">
                  <div className="text-[1.3rem] text-white font-bold font-Mona ">Ranking Criteria</div>
                  <div className="pb-2 text-gray-400  font-Mona">In order of significance</div>

                  <span className="flex items-center mb-1 mr-4">
                    <GoPeople className="text-white" />
                    <span className="ml-2">Followers</span>
                  </span>

                  <span className="flex items-center mb-1 mr-4">
                    <GoStar className="text-white" />
                    <span className="ml-2">Most Starred Repo</span>
                  </span>

                  <span className="flex items-center mb-1">
                    <GoGitPullRequest className="text-white" />
                    <span className="ml-2">Public Commits in 2023</span>
                  </span>

                  <span className="flex items-center">
                    <GoRepo className="text-white" />
                    <span className="ml-2">Public Repos</span>
                  </span>
                </p>
              </DialogContent>
            </Dialog>

            {/* Input for What3Words address */}
            <input
              type="text"
              className="px-4 py-2 text-white bg-gray-800 rounded-lg"
              placeholder="Enter What3Words address (e.g., apple.banana.orange)"
              onKeyDown={handleW3WSearch}
            />
          </div>
        </div>

        <div className="pt-2"></div>

        <div className="relative flex flex-col items-start justify-center px-4 pb-32 md:px-8 lg:px-32">
          <div className="relative pt-0 pb-0 z-1000">
            <TopGithubUsers city={city} isAuthenticated={isAuthenticated} />
          </div>
        </div>
      </main>
    </>
  );
}

export default Search;
