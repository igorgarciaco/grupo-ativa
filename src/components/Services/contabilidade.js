import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import "./style.css"

import { Container, Row, Col, Button } from "reactstrap"

const Contabilidade = ({ serviceImg, serviceLogo, serviceText }) => {
  const data = useStaticQuery(
    graphql`
          query contabilidade{
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
        <Col md="3" className="contabilidade-logo-col" id="contabilidade"
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="600"
        >
          <div className="contabilidade-logo">
            {TheLogoYouWant}
          </div>
        </Col>
        <Col className="text-col text-contabilidade" md="4"
          className="service-text"
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="600"
        >
          <h2>CONTABILIDADE</h2>
          <p>{serviceText}</p>
          <Link className="btn-more btn-red btn-service" to="/contabilidade/">Saiba mais</Link>
        </Col>
        <Col className="img-right-col"
          md="4"
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

export default Contabilidade