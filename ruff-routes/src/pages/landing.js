import React from "react";
import "../styling/landing.css";
import Navbar from "../components/navbar";

function Landing() {
  return (
    <div className="landing-container">
      <Navbar />
      <div className="hero">
        <div className="hero-card">
          <div className="text-content">
            <h2 className="card-heading">
              Discover Aotearoa with your canine companion
            </h2>
            <h4 className="card-copy">
              Explore the city with your furry friend and discover the best
              dog-friendly places, all in one place!
            </h4>
            <button className="hero-btn">Explore places near me</button>
          </div>
          <div className="hero-img">
            <img
              src="https://images.unsplash.com/photo-1551779891-b83901e1f8b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="categories-section">
        <h2 className="categories-heading">FILTER RESULTS FOR YOUR NEEDS</h2>
        {/* play */}
        <div className="category-card-container">
          <div className="category-card">
            <div className="category-img">
              <img
                src="https://images.unsplash.com/photo-1551779891-b83901e1f8b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
                alt=""
              />
            </div>
            <div className="category-card-content">
              <h5 className="category-tags">
                parks | beaches | hikes & trails
              </h5>
              <h3 className="category-header">Walks and playtime</h3>
              <h4 className="category-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae minus molestias ipsum omnis laborum debitis quia
              </h4>
              <button className="category-btn">Show me!</button>
            </div>
          </div>
        </div>
        {/* eat */}
        <div className="category-card-container">
          <div className="category-card category-card-flipped">
            <div className="category-card-content">
              <h5 className="category-tags">cafes | restaurants | bars</h5>
              <h3 className="category-header">Grab a snack!</h3>
              <h4 className="category-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae minus molestias ipsum omnis laborum debitis quia
              </h4>
              <button className="category-btn">Show me!</button>
            </div>
            <div className="category-img category-img-flipped">
              <img
                src="https://images.unsplash.com/photo-1587559070757-f72a388edbba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* stay */}
        <div className="category-card-container">
          <div className="category-card">
            <div className="category-img">
              <img
                src="https://images.unsplash.com/photo-1607277126387-0a1592dddfb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2865&q=80"
                alt=""
              />
            </div>
            <div className="category-card-content">
              <h5 className="category-tags">campsites | lodges | hostels</h5>
              <h3 className="category-header">Rest and relax</h3>
              <h4 className="category-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae minus molestias ipsum omnis laborum debitis quia
              </h4>
              <button className="category-btn">Show me!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
