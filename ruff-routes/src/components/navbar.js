import ruffRoutesLogo from "../images/black-paw.png";
import "../styling/navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function ExploreNavbar() {
  return (
    <Navbar
      className="navbar text-center justify-content-center pt-4 pb-4 "
      expand="lg"
      style={{
        backgroundColor: "rgba(245,245,245,1)",
        // border: "2px #56d9f5 solid",
        color: "black",
        width: "100vw",
      }}
    >
      <Container
        className="container "
        style={{
          marginRight: "1rem",
          marginLeft: "1rem",
        }}
      >
        <Navbar.Brand href="#">
          <img
            src={ruffRoutesLogo}
            alt="Logo"
            style={{
              width: "3rem",
              height: "3rem",
              transform: "rotate(-11deg)",
            }}
            className="d-inline-block align-text-center "
          />
          <a className="navbar-brand nav-heading ps-4 pe-3 pt-1 " href="#home">
            Ruff Routes
          </a>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ps-5 pe-5">
            <Nav.Link
              href="#explore"
              style={{
                color: "black",
                paddingRight: "1rem",
                paddingLeft: "1rem",
              }}
              className="custom-underline"
            >
              Explore
            </Nav.Link>

            <Nav.Link
              href="#aboutUs"
              style={{
                color: "black",
                paddingRight: "1rem",
                paddingLeft: "1rem",
              }}
              className="custom-underline"
            >
              About us
            </Nav.Link>
            <Nav.Link
              href="#suggestAPlace"
              style={{
                color: "black",
                paddingRight: "1rem",
                paddingLeft: "1rem",
              }}
              className="custom-underline"
            >
              Suggest a place
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
