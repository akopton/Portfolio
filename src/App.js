import React, { useEffect, useRef, useState } from "react";
import MainNav from "./components/MainNav";
import Welcome from "./components/Welcome";
import About from "./components/About";
import { FaCheck, FaTrashAlt, FaArrowUp } from 'react-icons/fa';
import Skills from "./components/Skills";
import Projects from "./components/Projects.js";
import Experience from "./components/Experience";
import Career from "./components/Career";
import MainSite from "./components/MainSite";
// import Header from "./components/Header";
// import About from "./components/old/About";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Contact from "./components/old/Contact";
// import Footer from "./components/Footer";
// import Github from "./components/Github";
// import Game from "./components/gameComponents/Game";
// import Checkboxes from "./components/old/Checkboxes";

function App() {
  return (
    <div className="app">
      <MainSite />
      {/* {
        !showSite ?
          <div className={hide ? "build-in-progress hide" : "build-in-progress"}>
            <h1>Page is in build... Please be patient.</h1>
            <div className="gif"></div>
            <button className="btn" onClick={handleClick}>Click here to check unfinished site!</button>
          </div>
        :
      } */}
    </div>
  );
}

export default App;