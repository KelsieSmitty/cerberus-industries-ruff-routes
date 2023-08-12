import React, { useState, useEffect } from "react";
import hikingDog from "../images/hiking-dog.png";
import cardData from "../data/cardData.json";
import { FaLocationArrow } from "react-icons/fa";

export default function Cards() {
  const [displayedCards, setDisplayedCards] = useState(5); //initial displayed #
  const cardsToAdd = 5; //how many cards to add when trigger point is hit
  const totalCards = cardData.length; //get total # of cards available in the cardData

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 90 //checks if user has scrolled to bottom of the page
    ) {
      loadMoreCards();
    }
  };

  const loadMoreCards = () => {
    //calculates # of new cards by adding cardstoadd # set to current total # of cards
    const newDisplayedCards = Math.min(displayedCards + cardsToAdd, totalCards); //makes sure the new dispalyed cards isn't more than the # of datacards
    setDisplayedCards(newDisplayedCards); //updates state
  };

  const dogCards = cardData.slice(0, displayedCards).map((item, index) => (
    <div
      className=" container-fluid pb-0 m-0"
      key={index}
      style={{
        backgroundColor: "rgba(245,245,245,1)",
      }}
    >
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 mt-4">
        <div className="col">
          <div
            className="card align-items-center "
            style={{
              display: "flex",
              flexDirection: "row",
              width: "42rem",
              height: "15rem",
              borderRadius: "0.5rem",
              borderWidth: "0.2rem",
              borderStyle: "solid",
              borderColor: "#000",
              background: "#FFF9E9",
              boxShadow: "6px 6px 0px 0px #7B7B7B",
            }}
          >
            <img
              src={hikingDog}
              className="card-img-left border rounded"
              alt="Hiking Dog"
              style={{
                width: "45%",
                height: "100%",
                objectFit: "cover",
                border: "2px #56d9f5 solid",
                borderRadius: "0.5rem",
              }}
            />
            <div className="card-body container ">
              <div className="row row-cols-auto">
                <div className="col" style={{ borderRight: "1px black solid" }}>
                  <h6
                    className="card-sub-title text-start"
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: "700",
                      margin: "0",
                      padding: "0",
                      cursor: "pointer",
                    }}
                  >
                    PARK
                  </h6>
                </div>
                <div className="col" style={{ borderRight: "1px black solid" }}>
                  <h6
                    className="card-sub-title text-start"
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: "700",
                      margin: "0",
                      padding: "0",
                      cursor: "pointer",
                    }}
                  >
                    POINT OF INTEREST
                  </h6>
                </div>
                <div className="col">
                  <h6
                    className="card-sub-title text-start"
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: "700",
                      margin: "0",
                      padding: "0",
                      cursor: "pointer",
                    }}
                  >
                    ESTABLISHMENT
                  </h6>
                </div>
              </div>

              <h5 className="card-title pt-4">{item.name}</h5>
              <h5
                className="card-distance"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "400",
                  fontFamily: "Lilita One",
                  width: "3rem",
                }}
              >
                {item.distance}
              </h5>
              <p
                className="card-address text-start mb-5"
                style={{
                  color: "#646464",
                  fontFamily: "Urbanist",
                  fontSize: "0.9rem",
                }}
              >
                {item.address}
              </p>
              <a
                href={item.mapLink}
                className=" map custom-button ps-2 pe-2 pt-1 pb-1"
              >
                Show on map <FaLocationArrow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return <>{dogCards}</>;
}
