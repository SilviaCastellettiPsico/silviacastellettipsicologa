import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useLocalDataSource } from "./data";
import "./style.css";

export function Header() {
  const header = useLocalDataSource();

  return (
    <Navbar bg="#a51080" expand="lg" collapseOnSelect={true}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {header.header.map((nav, index) => {
            return (
              <div key={index} style={{ marginRight: "30px" }}>
                <Nav.Link href={nav.url}>{nav.label}</Nav.Link>
              </div>
            );
          })}
        </Nav>
        <Nav style={{ marginLeft: "auto" }}>
          {header.ctaButton.map((button, index) => {
            return (
              <div key={index}>
                <Nav.Link
                  href={button.url}
                  target={button.openNewTab ? "__balnk" : ""}
                >
                  <Button>{button.label}</Button>
                </Nav.Link>
              </div>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
