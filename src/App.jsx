import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { GoPerson, GoSignOut, GoLocation } from "react-icons/go";

import { BsGithub } from "react-icons/bs";

import Home from "./pages/Home";
import Search from "./pages/Search";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Terms from "./pages/terms";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./components/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./components/dialog";
import { Separator } from "./components/Separator";

function App() {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("accessToken"));

  useEffect(() => {
    const fetchGithubUserData = async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        await fetch(`https://shrouded-thicket-64208-c185a4c1d6b4.herokuapp.com/getGithubUserData?accessToken=${accessToken}`, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            setUserData(data);
          });
      }
    };
    fetchGithubUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setUserData(null);
    window.location.reload();
  };

  const deleteAccount = async () => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      await fetch("https://shrouded-thicket-64208-c185a4c1d6b4.herokuapp.com/deleteAccount", {
        method: "DELETE",
        headers: {
          Authorization: accessToken,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Account deleted") {
            localStorage.removeItem("accessToken");
            setIsAuthenticated(false);
          } else {
            console.error("Failed to delete the account.");
          }
        });
    }
  };

  const [showBanner, setShowBanner] = useState(true);

  return (
    <Router>
      {/*
      {showBanner && (
        <div className="bg-[#DA552F] h-14 flex items-center justify-center select-none relative ">
          {" "}
          <a href="https://www.producthunt.com/posts/geogit" target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <h1 className="tracking-wide text-white">
              😺 GeoGit is featured on <span className="font-bold text-white">Product Hunt</span> today - Check it out :)
            </h1>
          </a>
          <a href="https://www.producthunt.com/posts/geogit?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-geogit" target="_blank">
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=426015&theme=light"
              alt="GeoGit - Rank the top software developers by location 🌎 | Product Hunt"
              style={{ width: "275px", height: "39px" }}
              width="250"
              height="54"
            />
          </a>
          <button className="absolute text-2xl font-bold text-white right-6 top-2" onClick={() => setShowBanner(false)}>
            ×
          </button>
        </div>
      )}
      */}

      <header className="py-1 bg-transparent">
        <div className="container z-50 flex flex-col items-center justify-between px-4 pt-4 mx-auto sm:px-12 sm:flex-row">
          <Link to="https://dispo.social" className="flex items-center mb-4 space-x-3 select-none sm:mb-0">
            <span className="hidden text-2xl font-bold text-white select-none sm:inline">DISPO.SOCIAL</span>
          </Link>
          <nav className="flex items-center font-Hublot">
            <ul className="flex space-x-2 font-bold text-gray-300 select-none sm:space-x-4">
              <li>
                <Link to="https://dispo.social.com" className="block px-2 py-2 font-bold text-white transition duration-150 ease-in-out sm:px-4 hover:text-gray-300">
                 🛖 HOME
                </Link>
              </li>
              <li>
                <Link to="https://zatv.dispo.social" className="block px-2 py-2 font-bold text-white transition duration-150 ease-in-out sm:px-4 hover:text-gray-300">
                 🤳 ZATV
                </Link>
              </li>
              <li>
                <Link to="/About" className="block px-2 py-2 font-bold text-white transition duration-150 ease-in-out sm:px-4 hover:text-gray-300">
                 🅰️BOUT
                </Link>
              </li>

              {userData ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <img src={userData.avatar_url} alt="User Avatar" className="w-10 h-10 rounded-full" />
                  </DropdownMenuTrigger>
                  <Dialog>
                    <DropdownMenuContent>
                      <DropdownMenuLabel className="font-bold font-Mona max-w-[12rem] whitespace-nowrap  text-lg ">{userData.name}</DropdownMenuLabel>
                      <DropdownMenuLabel className="pb-1 text-sm text-gray-300 font-Hublot custom-width">{userData.location}</DropdownMenuLabel>{" "}
                      <DropdownMenuSeparator className="bg-neutral-600" />
                      <DialogTrigger asChild>
                        <DropdownMenuItem className="font-Hublot text-md">
                          <GoPerson className="mr-2 text-lg" />
                          <span>Profile</span>
                        </DropdownMenuItem>
                      </DialogTrigger>
                      <DropdownMenuSeparator className="bg-neutral-600" />
                      <DropdownMenuItem className="font-Hublot" onClick={handleLogout}>
                        <GoSignOut className="mr-2 text-lg" />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-3xl font-bold text-white">Account</DialogTitle>
                        <DialogDescription className="text-gray-400 text-md">Manage your account information</DialogDescription>
                      </DialogHeader>
                      <DialogDescription className="pt-2 text-lg text-white ">Profile</DialogDescription>
                      <DialogDescription className="flex items-center space-x-2">
                        <img src={userData.avatar_url} alt="User Avatar" className="rounded-full w-14 h-14" />
                        <DialogDescription className="pl-2 text-md">
                          <DialogDescription className="font-bold text-white">{userData.name}</DialogDescription>
                          <DialogDescription className="text-gray-400">{userData.login}</DialogDescription>
                        </DialogDescription>
                      </DialogDescription>
                      <Separator />
                      <DialogHeader className="mb-0 text-lg text-white">Location</DialogHeader>
                      <DialogDescription className="text-gray-400">{userData.location}</DialogDescription>
                      <Separator />

                      <DialogHeader className="mb-0 text-lg text-white">Email Addresses</DialogHeader>
                      <DialogDescription className="text-gray-400">{userData.email}</DialogDescription>
                      <Separator />

                      <DialogHeader className="mb-0 text-lg text-white">Connected Accounts</DialogHeader>
                      <DialogDescription className="flex items-center text-gray-400">
                        <BsGithub className="mr-3 text-lg" />
                        <span>{userData.login}</span>
                      </DialogDescription>

                      <Separator />

                      <DialogDescription className="flex items-center justify-between w-full text-gray-300">
                        <DialogDescription className="pb-2">
                          <DialogDescription className="text-white text-[1.1rem]">Delete your account</DialogDescription>
                          <DialogDescription className="text-gray-400">Delete your account and all its associated data.</DialogDescription>
                        </DialogDescription>
                        <button
                          onClick={handleLogout}
                          className="px-3 py-1 text-red-500 transition duration-200 ease-in-out border border-red-500 hover:bg-red-500 hover:text-white"
                        >
                          Delete Account
                        </button>
                      </DialogDescription>
                    </DialogContent>
                  </Dialog>
                </DropdownMenu>
              ) : (
                <Link to="https://zatree.dispo.social" className="block px-2 py-2 font-bold text-white sm:px-4 login-button">
                  🌴 ZATREE
                </Link>
              )}
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search isAuthenticated={isAuthenticated} />} />
        <Route path="/About" element={<About />} />
        <Route path="/SignIn" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/Terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;
