import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Cards from "../components/cards";
import Filter from "../components/filter";
import Map from "../images/map.png";
import Footer from "../components/footer";

function Explore() {
  return (
    <div
      className="Explore"
      style={{
        backgroundColor: "#ede9e6",
        width: "100vw",
      }}
    >
      {" "}
      <Navbar />
      <div className="row">
        <div className="col-3 me-5 ms-5 mt-2 filter-responsive">
          <img src={Map} className="map-img" />
          <Filter />
        </div>
        <div className="col-8">
          <h2 className="header-font">EXPLORE DOG-FRIENDLY ACTIVITIES</h2>
          <Cards />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
