import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./style.css"

import { Container, Row, Col, Button } from "reactstrap"

const Logistica = ({ serviceImg, serviceLogo, serviceText }) => {
    const data = useStaticQuery(
        graphql`
          query logistica{
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
                <div className="service-logo service-logo-left">
                    {TheLogoYouWant}
                </div>
                <Button className="btn-more-red">Saiba mais</Button>
            </Col>
            <Col md="1"></Col>
        </Row>
    </Container>
    )
}

export default Logistica