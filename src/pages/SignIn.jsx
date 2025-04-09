import React, { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoSparklesSharp } from "react-icons/io5";

import "../App.css";

const CLIENT_ID = "502ae01831b11391d1ee";

export default function SignIn({ setIsAuthenticated }) {
  const isAuthenticated = !!localStorage.getItem("accessToken");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");

    if (codeParam && localStorage.getItem("accessToken") === null) {
      const getAccessToken = async () => {
        await fetch(`https://shrouded-thicket-64208-c185a4c1d6b4.herokuapp.com/getAccessToken?code=${codeParam}`, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.access_token) {
              localStorage.setItem("accessToken", data.access_token);
              setIsAuthenticated(true);
              window.location.href = "/Search";
            }
          });
      };
      getAccessToken();
    }
  }, []);

  useEffect(() => {
    const fetchGithubUserData = async (accessToken) => {
      await fetch(`https://shrouded-thicket-64208-c185a4c1d6b4.herokuapp.com/getGithubUserData?accessToken=${accessToken}`, {
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

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsAuthenticated(true);
    }
  }, []);
  return (
    <>
      <main className="bg-thegray home-no-scroll fade-in1">
        <div className="relative flex items-center justify-center min-h-screen ">
          {/*Background behind other elements */}
          <div className="absolute top-[24rem]  w-[45rem] h-[45rem] bg-blue-300 rounded-full filter blur-5xl opacity-50 animate-blob animation-delay-1"></div>
          <div className="absolute top-[24rem]  w-[30rem] h-[30rem] bg-blue-400 rounded-full filter blur-5xl opacity-30 animate-blob animation-delay-1"></div>

          <div className="relative z-10 pt-0 pb-40">
            <div className="py-8 px-9 signInCard">
              <div className="flex items-center flex-nowrap"></div>

              {isAuthenticated && userData ? (
                <>
                  <h1 className="text-4xl font-bold font-Mona ">
                    <span className="text-white">Welcome</span>, {userData.login}!
                  </h1>
                  <h2 className="pt-3 pb-4 text-center text-gray-300"> You have successfully signed in.</h2>
                  <div className="flex items-center justify-center">
                    <Link to="/search" className="font-mono select-none get-started-button ">
                      <IoSparklesSharp className="inline align-text-top " /> Get Started
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-4xl font-bold font-Mona ">DISPO.SOCIAL</h1>

                  <h2 className="pt-6 text-xl font-bold font-Mona">Sign in</h2>
                  <h3 className="pt-1 pb-5 text-lg text-gray-300 font-Mona">
                    to continue to <span className="font-bold text-gray-300">DISPO.SOCIAL</span>
                  </h3>
                  <button className="signInButton text-md flex items-center py-2.5 whitespace-nowrap" onClick={!isAuthenticated ? loginWithGithub : null}>
                    <AiFillGithub className="text-2xl" />
                    <span className="ml-3 ">Sign in With GitHub</span>
                  </button>
                  <h3 className="flex items-center justify-center pt-2 text-gray-400 text-md">
                    <Link to="/Terms">
                      By signing in you agree to <b>terms of service</b>.
                    </Link>
                  </h3>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
