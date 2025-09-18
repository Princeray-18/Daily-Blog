import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Bloglist from "../components/Bloglist";
import Newssletter from "../components/Newssletter";

function Home() {
  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Hero / Header section */}
      <Header />

      {/* Blog Categories + Blog cards */}
      <Bloglist/> 
      <Newssletter/>
    </div>
  );
}

export default Home;
