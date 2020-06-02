import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';

import { Icon, InlineIcon } from '@iconify/react';
import facebookOutlined from '@iconify/icons-ant-design/facebook-outlined';
import instagramOutlined from '@iconify/icons-ant-design/instagram-outlined';
import linkedinOutlined from '@iconify/icons-ant-design/linkedin-outlined';




import "./style.css"

import Stamp from "../Stamp"

const Footer = () => {

    const logoFooter = "logo-rodape.png"
    const stamp = "selo-25.png"


    const data = useStaticQuery(
        graphql`
          query {
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth:400) {
                    ...GatsbyImageSharpFluid_tracedSVG
                    originalName
                  }
                }
              }
            }
          }`,
    );

    const TheImageYouWant = data.allImageSharp.edges
        .filter(edge => edge.node.fluid.originalName === logoFooter)
        .map(myImage => <Img fluid={myImage.node.fluid} />);

    const TheStampYouWant = data.allImageSharp.edges
        .filter(edge => edge.node.fluid.originalName === stamp)
        .map(myImage => <Img fluid={myImage.node.fluid} />);


    return (
        <>
            <section className="footer-wrapper">
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="foo-logo">
                                {TheImageYouWant}
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="foo-stamp">
                                {TheStampYouWant}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="1"></Col>
                        <Col md="4">
                            <Nav vertical>
                                <NavItem>
                                    <NavLink href="#">INÍCIO</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">SOBRE</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">SERVIÇOS</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink disabled href="#">TRABALHE CONOSCO</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink disabled href="#">UNIDADES</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink disabled href="#">NOTÍCIAS</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink disabled href="#">CONTATO</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col md="7">
                            <div className="foo-social-icons">
                                <Icon icon={facebookOutlined} width="35" height="35" className="foo-social-icon"/>
                                <Icon icon={instagramOutlined} width="35" height="35" className="foo-social-icon" />
                                <Icon icon={linkedinOutlined} width="35" height="35" className="foo-social-icon"/>
                            </div>
                           
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                        <div className="foo-contact">
                                <p>(47) 2104 6900</p>
                                <p>contato@grupoativa.net</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )

}

export default Footer