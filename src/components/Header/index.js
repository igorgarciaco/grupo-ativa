import React, { Component } from 'react';
import { Link } from 'gatsby';
import './style.css';
import {
  NavDropdown,
  Form,
  Navbar,
  FormControl,
  Nav,
  Button,
} from 'react-bootstrap';

import Logo from "./logo.js"


class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggleNavbar.bind(this);

    window.addEventListener("scroll", function (event) {
      if (window.pageYOffset > 100) {
        document.getElementById('navbar').style.background = "rgba(0,0,0,0.8)";
      }
      else {
        document.getElementById('navbar').style.background = "transparent";
      }
    });

    // https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
    if (typeof window !== 'undefined') {
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
          document.getElementById('navbar').style.top = '-5.0rem';
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
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="inside-nav">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#aboutSection">Sobre</Nav.Link>
              <NavDropdown title="Servicos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#assessoria">Ativa despacho</NavDropdown.Item>
                <NavDropdown.Item href="#apoema">apoema ceritificações</NavDropdown.Item>
                <NavDropdown.Item href="#contabilidade">ativa contabilidade</NavDropdown.Item>
                <NavDropdown.Item href="#logistica">ativa logistica</NavDropdown.Item>
                <NavDropdown.Item href="#juridico">ativa juridico</NavDropdown.Item>
                <NavDropdown.Item href="#keyWest">key west transportes</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#units">Unidades</Nav.Link>
              <Nav.Link href="#contact">Contato</Nav.Link>
              <Nav.Link href="#link">Noticias</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default Header;