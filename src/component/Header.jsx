import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import sidelogo from "../assets/image/side.png";
import logo from "../assets/image/logo (1).png"; // ✅ Import logo properly

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);


        
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          fixed="top" // ✅ Makes navbar sticky on top
          className={`navbar-custom ${scrolled ? "navbar-scrolled" : "navbar-top"}`}
        >
          <Container>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              className="border-0 bg-transparent p-0"
            >
              <img src={sidelogo} alt="menu" style={{ width: "40px", cursor: "pointer" }} />
            </Navbar.Toggle>

            <div className="nav-image">
              <img src={logo} alt="logo"  />
            </div>

            <Navbar.Brand href="#">
              <Button>Get in Touch</Button>
            </Navbar.Brand>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={logo} alt="logo" style={{ marginLeft: "45px", width: "100px" }} />
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <div className="naveb">
                  <Nav.Link href="#home">Home</Nav.Link>

                  <NavDropdown title="Why Schon" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Product" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="#product1">Product 1</NavDropdown.Item>
                    <NavDropdown.Item href="#product2">Product 2</NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#blog">Blog</Nav.Link>
                  <Nav.Link href="#contacts">Contacts</Nav.Link>
                </div>

                <Button className="get-btn">Get in Touch</Button>
                <Button className="dealer-btn">Become a Dealer</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
