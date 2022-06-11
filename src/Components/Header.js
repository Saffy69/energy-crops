import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Config/firebaseConfig";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../Images/energy-logo.png";
export default function Header() {
  const currentUser = useAuth();

  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img
            src={Image}
            alt="logo"
            style={{ borderRadius: "50%", width: "75px" }}
          />
          <span className="ml-3 text-xl">Energy-Crops</span>
        </p>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <p className="mr-5 hover:text-white">
            <Link to="/">Home</Link>
          </p>
          <p className="mr-5 hover:text-white">
            <Link to="/about">About</Link>
          </p>
          <p className="mr-5 hover:text-white">
            <Link to="/contact">Contact</Link>
          </p>
        </nav>
        <button className=" inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          {currentUser ? (
            <Link to="/user">
              <p>
                {currentUser.email.substring(0, currentUser.email.length - 10)}
              </p>
            </Link>
          ) : (
            <Link to="/sign-up">Sign Up</Link>
          )}
          {currentUser ? (
            <FontAwesomeIcon icon={faUserCheck} />
          ) : (
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
