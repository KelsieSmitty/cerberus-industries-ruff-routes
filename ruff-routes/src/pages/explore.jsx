import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Cards from "../components/cards";
import Filter from "../components/filter";

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
        <div className="col-3 me-5 ms-5 mt-2">
          <Filter />
        </div>
        <div className="col-8">
          {" "}
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Explore;
