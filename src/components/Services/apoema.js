import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import "./style.css"

import { Container, Row, Col, Button } from "reactstrap"

const Apoema = ({ serviceImg, serviceLogo, serviceText }) => {
    const data = useStaticQuery(
        graphql`
          query apoema{
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth:1000) {
                    ...GatsbyImageSharpFluid_tracedSVG
                    originalName
                  }
                }
              }
            }
          }`,
    );

    const TheImageYouWant = data.allImageSharp.edges
        .filter(edge => edge.node.fluid.originalName === serviceImg)
        .map(myImage => <Img fluid={myImage.node.fluid} />);

    const TheLogoYouWant = data.allImageSharp.edges
        .filter(edge => edge.node.fluid.originalName === serviceLogo)
        .map(myImage => <Img fluid={myImage.node.fluid} />);



    return (
        <Container className="services-left">
        <Row>
            <Col className="img-left-col" md="6">
                {TheImageYouWant}
            </Col>
            <Col className="text-col" md="5">
                <p>{serviceText}</p>
                <div className="service-logo service-logo-left" id="apoema">
                    {TheLogoYouWant}
                </div>
                <Link className="btn-more-apoema" to="/apoema/">Saiba mais</Link>
            </Col>
            <Col md="1"></Col>
        </Row>
    </Container>
    )
}

export default Apoema