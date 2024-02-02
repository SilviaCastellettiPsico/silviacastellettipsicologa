import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useLocalDataSource } from "./data";
import "./style.css";

export function Header() {
  const header = useLocalDataSource();

  return (
    <header className="header">
      <Navbar
        className="header-container"
        bg="#a51080"
        expand="lg"
        collapseOnSelect={true}
      >
        {/*         <Navbar.Brand href="#chisono">
          <GatsbyImage
            image={getImage(header.image.src)}
            alt={header.image.alt}
            loading="eager"
          />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            {header.header.map((nav, index) => {
              return (
                <div key={index} style={{ marginRight: "30px" }}>
                  <Nav.Link href={nav.url}>{nav.label}</Nav.Link>
                </div>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
