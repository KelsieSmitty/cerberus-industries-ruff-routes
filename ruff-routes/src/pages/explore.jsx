import React, { useState } from 'react';
import Navbar from "../components/navbar";
import Cards from "../components/cards";

function Explore() {
  return (
    <div
      className="Explore"
      style={{
        backgroundColor: "rgba(245,245,245,1)",
        width: "100vw",
      }}
    >
      <Navbar />
      <Cards />
    
    </div>
  );
}

export default Explore;
