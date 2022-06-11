import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Plates from "./Components/Plates";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import User from "./Components/User";
import { useAuth } from "./Config/firebaseConfig";

function App() {
  const currentUser = useAuth();
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Plates />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          {currentUser ? <Route path="/user" element={<User />} /> : undefined}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
