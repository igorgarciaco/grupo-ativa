import PropTypes from "prop-types"
import React, { useState } from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col
} from "reactstrap"
import "./style.css"

const Header = () => {

  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
          
        }
      }
    }
  }
`)

// return
// }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    <header>
        <Navbar className="main-navbar" expand="lg" fixed="top" light>
          <Col md="6">
            <NavbarBrand href="/"> <Img fixed={data.placeholderImage.childImageSharp.fixed}/> </NavbarBrand>
          </Col>
          <Col md="6">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="">Inicio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Sobre</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav >
                    Serviços
              </DropdownToggle>
                  <DropdownMenu left>
                    <DropdownItem>
                      Ativa despacho
                </DropdownItem>
                    <DropdownItem>
                      apoema certificações
                </DropdownItem>
                    <DropdownItem>
                      ativa contabilidade
                </DropdownItem>
                    <DropdownItem>
                      ativa juridico
                </DropdownItem>
                    <DropdownItem>
                      key west transportes
                </DropdownItem>
                    <DropdownItem>
                      ativa logística
                </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="">unidades</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">contato</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">noticias</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Col>
        </Navbar>
    </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
