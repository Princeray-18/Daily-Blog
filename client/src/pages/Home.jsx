import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Bloglist from "../components/Bloglist";

function Home() {
  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Hero / Header section */}
      <Header />

      {/* Blog Categories + Blog cards */}
      <Bloglist/> 
    </div>
  );
}

export default Home;
