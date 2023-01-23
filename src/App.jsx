import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./Navbar";
import GoogleText from "./GoogleText";
import SearchBar from "./SearchBar";

function App() {
  return (
    <>
      <head>
        <title>google</title>
      </head>
      <main>
        <Navbar />
        <GoogleText />
        <SearchBar />
      </main>
    </>
  );
}

export default App;
