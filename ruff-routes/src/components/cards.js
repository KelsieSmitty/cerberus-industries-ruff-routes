import hikingDog from "../images/hiking-dog.png";
import iconArrow from "../images/icon-arrow.png";
import { FaLocationArrow } from "react-icons/fa";

export default function Cards() {
  return (
    <div
      className=" container-fluid pb-0 m-0"
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
                    }}
                  >
                    ESTABLISHMENT
                  </h6>
                </div>
              </div>

              <h5 className="card-title pt-4">Meola Reef Dog Park</h5>
              <h5
                className="card-distance"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "400",
                  fontFamily: "Lilita One",
                  width: "3rem",
                }}
              >
                2.3km
              </h5>
              <p
                className="card-address text-start mb-5"
                style={{
                  color: "#646464",
                  fontFamily: "Urbanist",
                  fontSize: "0.9rem",
                }}
              >
                81-189 Meola Road, Western Springs, Auckland 1022
              </p>
              <a
                href="https://savinghope.co.nz/dogs/maverick/"
                className=" map custom-button ps-2 pe-2 pt-1 pb-1"
              >
                Show on map <FaLocationArrow />
              </a>
            </div>
          </div>
        </div>
        {/* <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(0,0,0, 0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          <img
            src={adoptee2}
            className="card-img-top img-fluid border rounded"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
            alt="Adoptee2"
          />
          <div className="card-body">
            <h5 className="card-title">Emmie Jay</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Female, puppy.
              <br />
              <br />I love to be kept busy and spend time exploring, playing and
              learning new things.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/emmie-jay/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div>
        </div>
        <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(0,0,0, 0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          <img
            src={adoptee3}
            className="card-img-top object-fit-fill border rounded"
            alt="Adoptee1"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Ace</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Male, puppy.
              <br />
              <br />
              Enjoys a good snuggle on the bed.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/ace-3/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div>
        </div>
        <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(0,0,0, 0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          <img
            src={adoptee4}
            className="card-img-top object-fit-fill border rounded"
            alt="Adoptee1"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Flame</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Male, puppy.
              <br />
              <br />
              Flame is a very happy and playful puppy.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/flame/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div>
        </div>
        <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(0,0,0, 0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          {" "}
          <img
            src={adoptee5}
            className="card-img-top object-fit-fill border rounded"
            alt="Adoptee1"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Ashlee</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Female, puppy.
              <br />
              <br />
              Very happy to snuggle next to you on the couch.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/ashlee/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 mt-4">
        {" "}
        <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(86, 217, 245, 0.0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          {" "}
          <img
            src={adoptee6}
            className="card-img-top object-fit-fill border rounded"
            alt="Adoptee1"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Griffin</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Male, puppy.
              <br />
              <br />
              He loves the company of people and a good snuggle, but he is also
              content in finding his own space to curl up in.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/griffin/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div>
        </div>
        <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(0,0,0, 0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          {" "}
          <img
            src={adoptee7}
            className="card-img-top object-fit-fill border rounded"
            alt="Adoptee1"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Daisy</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Female, puppy.
              <br />
              <br />
              She loves nothing more than to cuddle up on your knee on the sofa.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/daisy-3/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div>
        </div>
        <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(0,0,0, 0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          {" "}
          <img
            src={adoptee8}
            className="card-img-top object-fit-fill border rounded"
            alt="Adoptee1"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Rocky</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Male, puppy.
              <br />
              <br />
              He knows basic commands but is very smart and willing to learn
              loads more.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/rocky-4/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div>
        </div>
        <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(0,0,0, 0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          <img
            src={adoptee9}
            className="card-img-top object-fit-fill border rounded"
            alt="Adoptee1"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Cooper</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Male, puppy.
              <br />
              <br />
              Copper is a people puppy, the more the merrier.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/cooper-2/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div>
        </div>
        <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(0,0,0, 0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          <img
            src={adoptee10}
            className="card-img-top object-fit-fill border rounded"
            alt="Adoptee1"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Roko</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Male, adult.
              <br />
              <br />I very much love curling up next to you on the couch while
              you work, watch the footy or Netflix.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/roko/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div> 
        </div>*/}
      </div>
    </div>
  );
}
