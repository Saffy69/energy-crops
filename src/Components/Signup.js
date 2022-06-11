import React from "react";
import { reducer, initialState } from "./Signin";
import { Link } from "react-router-dom";
import { signUp, useAuth } from "../Config/firebaseConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const { useState, useReducer } = React;

export default function Signin() {
  const [info, setInfo] = useState({ name: "", email: "", pass: "" });
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  return (
    <section className="h-full bg-gray-900">
      <div className="container px-6 py-12 h-full bg-gray-900">
        <div className="flex justify-center items-center flex-wrap h-full g-6 bg-gray-900 text-white">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://quixy.com/wp-content/uploads/2020/05/Blog_Top20_Image4.png"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form>
              <div className="mb-6 pr-4">
                <input
                  value={info.name}
                  onChange={(e) => {
                    setInfo({ ...info, name: e.target.value });
                  }}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Username"
                />
              </div>

              <div className="mb-6 pr-4 ">
                <input
                  value={info.email}
                  onChange={(e) => {
                    setInfo({ ...info, email: e.target.value });
                  }}
                  type="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>

              <div className="flex felx-row  w-full">
                <div className="mb-6 w-full">
                  <input
                    value={info.pass}
                    onChange={(e) => {
                      setInfo({ ...info, pass: e.target.value });
                    }}
                    type={state.content}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                </div>
                <div
                  className="relative top-3 right-7 text-black"
                  onClick={() => {
                    state.seen
                      ? dispatch({ type: "UNSEE" })
                      : dispatch({ type: "SEE" });
                  }}
                >
                  {state.seen ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <label
                    className="form-check-label inline-block text-white"
                    htmlFor="exampleCheck2"
                  >
                    Have an Account?{" "}
                    <Link to="/sign-in" className="text-blue-600">
                      Sign In
                    </Link>
                  </label>
                </div>
                <button className=" ml-4  text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">
                  Forgot password?
                </button>
              </div>

              <Link to="/">
                <button
                  onClick={async () => {
                    setLoading(true);
                    try {
                      await signUp(info.email, info.pass);
                    } catch (err) {
                      const errorMessage = err.message;
                      alert(errorMessage);
                    }
                    setLoading(false);
                  }}
                  disabled={loading || currentUser}
                  type="button"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign Up
                </button>
              </Link>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>

              <a
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-3.5 h-3.5 mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
                Continue with Facebook
              </a>
              <p
                className="px-7 py-3 text-gray-900 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                style={{ backgroundColor: "white" }}
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <svg
                  className="w-3.5 h-3.5 mr-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                    fill="#34A853"
                  />
                  <path
                    d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                    fill="#EB4335"
                  />
                </svg>
                Continue with Google
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
