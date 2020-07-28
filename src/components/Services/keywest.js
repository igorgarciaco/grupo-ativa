import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import "./style.css"

import { Container, Row, Col, Button } from "reactstrap"

const KeyWest = ({ serviceImg, serviceLogo, serviceText }) => {
  const data = useStaticQuery(
    graphql`
          query keyWest{
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
    <Container className="services-left key-west">
      <Row>
        <Col className="img-left-col" md="6"
          data-sal="slide-left"
          data-sal-delay="1900"
          data-sal-easing="ease"
          data-sal-duration="600"
        >
          {TheImageYouWant}
        </Col>
        <Col className="text-col" md="5">
          <div
            data-sal="slide-left"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="600"
          >
            <p>{serviceText}</p>
          </div>
          <div className="service-logo service-logo-left" id="keyWest"
            data-sal="slide-left"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="600"
          >
            {TheLogoYouWant}
          </div>
          <Link to="/keywest/" className="btn-more-keywest"
            data-sal="slide-left"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="600"
          >Saiba mais</Link>
        </Col>
        <Col md="1"></Col>
      </Row>
    </Container>
  )
}

export default KeyWest