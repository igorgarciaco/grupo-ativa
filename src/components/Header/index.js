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
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;