import React from "react";
import "../styling/home.css";
import pawImg from "../images/paw.png";

function Home() {
  return (
    <div className="homeimage">
      <div className="header">
        <h1 className="header-font">Ruff Routes</h1>
        <img src={pawImg} className="pawImg" />
      </div>
      <div className="home-container">
        <div className="content m-3">
          <div className="info">
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              illo iste quos harum consequuntur quaerat asperiores quo itaque
              voluptates necessitatibus maxime? Enim tenetur maiores quo. Sint
              quos consequuntur iusto deleniti?
            </p>
          </div>
          <a href="/explore">
            <button className="expore-btn">Explore near me!</button>
          </a>
        </div>
        <div className="empty"></div>
      </div>
    </div>
  );
}

export default Home;
