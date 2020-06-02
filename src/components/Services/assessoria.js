import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./style.css"

import { Container, Row, Col, Button } from "reactstrap"

const Assessoria = ({ serviceImg, serviceLogo, serviceText }) => {
    const data = useStaticQuery(
        graphql`
          query assessoria{
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
        <Container className="services-right">
            <Row>
                <Col md="1"></Col>
                <Col className="text-col" md="5">
                    <div className="service-logo">
                        {TheLogoYouWant}
                    </div>
                    <p>{serviceText}</p>
                    <Button className="btn-more-red">Saiba mais</Button>
                </Col>
                <Col className="img-right-col" md="6">
                    {TheImageYouWant}
                </Col>
            </Row>
        </Container>
    )
}

export default Assessoria