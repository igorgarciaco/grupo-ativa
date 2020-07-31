import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import "./style.css"

import { Container, Row, Col, Button } from "reactstrap"

const Juridico = ({ serviceImg, serviceLogo, serviceText }) => {
  const data = useStaticQuery(
    graphql`
          query juridico{
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
    <Container className="services-right juridico">
      <Row>
        <Col md="1"></Col>
        <Col className="text-col" md="5">
        <div className="logo-mobile">
            {TheLogoYouWant}
          </div>
          <div className="service-logo" id="juridico"
            data-sal="slide-right"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="600"
          >
            {TheLogoYouWant}
          </div>
          
          <div
            className="service-text"
            data-sal="slide-right"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="600"
          >
            <p>{serviceText}</p>
            <br></br>
            <Link className="btn-more btn-red btn-service">Saiba mais</Link>
          </div>
        </Col>
        <Col className="img-right-col" md="6"
          data-sal="slide-right"
          data-sal-delay="1900"
          data-sal-easing="ease"
          data-sal-duration="600"
        >
          {TheImageYouWant}
        </Col>
      </Row>
    </Container>
  )
}

export default Juridico