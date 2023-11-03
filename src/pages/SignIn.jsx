import React, { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import GeoGitIcon from "../assets/GeoGitIcon.png";
import "../App.css";

const CLIENT_ID = "502ae01831b11391d1ee";

export default function SignIn() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("accessToken"));
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");

    if (codeParam && localStorage.getItem("accessToken") === null) {
      const getAccessToken = async () => {
        await fetch(`http://localhost:4000/getAccessToken?code=${codeParam}`, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.access_token) {
              localStorage.setItem("accessToken", data.access_token);
              setIsAuthenticated(true);
              window.location.reload();
            }
          });
      };
      getAccessToken();
    }
  }, []);

  useEffect(() => {
    const fetchGithubUserData = async (accessToken) => {
      await fetch(`http://localhost:4000/getGithubUserData?accessToken=${accessToken}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
        });
    };

    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      fetchGithubUserData(accessToken);
    }
  }, [isAuthenticated]);

  const loginWithGithub = () => {
    window.location.assign(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`);
  };
  return (
    <>
      <main className="bg-thegray home-no-scroll fade-in1">
        <div className="min-h-screen flex items-center justify-center relative ">
          {/*Background behind other elements */}
          <div className="absolute top-[24rem]  w-[45rem] h-[45rem] bg-blue-300 rounded-full filter blur-5xl opacity-50 animate-blob animation-delay-1"></div>
          <div className="absolute top-[24rem]  w-[30rem] h-[30rem] bg-blue-400 rounded-full filter blur-5xl opacity-30 animate-blob animation-delay-1"></div>

          <div className="relative z-10 pt-0 pb-40">
            <div className="px-7 py-8 signInCard">
              <div className="flex items-center flex-nowrap">
                <img src={GeoGitIcon} alt="GeoGit Icon" className="max-w-smaller" />
                <h1 className="font-Mona font-bold text-3xl pl-3">GeoGit</h1>
              </div>

              <h2 className="font-Mona font-bold pt-8 text-xl">Sign in</h2>
              <h3 className="font-Mona pt-1 text-gray-300 text-lg pb-5">
                to continue to <span className="text-gray-300 font-bold">GeoGit</span>
              </h3>
              {isAuthenticated && userData ? (
                <h2>Welcome, {userData.login}</h2>
              ) : (
                <button className="signInButton text-md flex items-center px-28 py-2.5" onClick={!isAuthenticated ? loginWithGithub : null}>
                  <AiFillGithub className="text-2xl" />
                  <span className="ml-3 ">Sign in With GitHub</span>
                </button>
              )}
              <h3 className="flex items-center justify-center text-gray-400 pt-2">
                By signing in, you agree to our&nbsp;
                <Link to="/Terms" className="text-gray-200">
                  Terms of Service
                </Link>
                .
              </h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
