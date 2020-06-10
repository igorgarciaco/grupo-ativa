import React, { Component } from 'react';
import { Link, animateScroll } from "react-scroll";

import './style.css';
import {
  Container,
  NavDropdown,
  Navbar,
  Nav,
} from 'react-bootstrap';

import Logo from "./logo.js"


class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggleNavbar.bind(this);

    // https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
    if (typeof window !== 'undefined') {
      require("smooth-scroll")('a[href*="#"]');
      // change classes when scrolling
      window.addEventListener("scroll", function (event) {
        if (window.pageYOffset > 100) {
          document.getElementById('navbar').classList.add("navbar-fixed");
        }
        else {
          document.getElementById('navbar').classList.remove("navbar-fixed");
        }
      });
      // show/hide nav when scrolling 
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (
          (maxScroll > 0 &&
            prevScrollpos > currentScrollPos &&
            prevScrollpos <= maxScroll) ||
          (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
          (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
          document.getElementById('navbar').style.top = '0';
        } else {
          document.getElementById('navbar').style.top = '-15.0rem';
        }
        prevScrollpos = currentScrollPos;
      };
    }
  }

  state = {
    isOpen: false,
  };

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar expand="lg" id="navbar" className="main-navbar">
          <Container>
            <Navbar.Brand>
              <Link to="coverText" className="brand"
              spy={true}
              smooth={true}
              offset={-500}
              duration={500}>
              <Logo />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="inside-nav">
                <Link to="#" className="nav-link">Inicio</Link>
                <Link to="aboutSection" className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Sobre
                </Link>
                <NavDropdown title="Servicos" id="basic-nav-dropdown">

                  <NavDropdown.Item>
                    <Link
                      to="assessoria"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                      Ativa despacho
                      </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to="apoema"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                      Apoema ceritificações
                      </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to="logistica"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                      Ativa logistica
                      </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to="juridico"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                      Ativa juridico
                      </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to="keyWest"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                      Key West Transportes
                      </Link>
                  </NavDropdown.Item>

                </NavDropdown>
                <Link to="units" className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  unidades
                </Link>
                <Link to="contact" className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Contato
                </Link>
                {/* <Link to="" className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  noticias
                </Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;