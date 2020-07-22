import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import "./style.css"
import { Row, Col } from "reactstrap"


const InternalHeader = ({ internalHeaderImg, internalHeaderTitle, internalHeaderSubtitle, footerImg, headerColor }) => {

  const data = useStaticQuery(
    graphql`
          query internalHeader{
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth:1980) {
                    ...GatsbyImageSharpFluid_tracedSVG
                    originalName
                  }
                }
              }
            }
          }`,
  );

  const TheImageYouWant = data.allImageSharp.edges
    .filter(edge => edge.node.fluid.originalName === internalHeaderImg)
    .map(myImage => <Img fluid={myImage.node.fluid} />);

  const HeaderTitle = data.allImageSharp.edges
    .filter(edge => edge.node.fluid.originalName === internalHeaderTitle)
    .map(myImage => <Img fluid={myImage.node.fluid} />);

  const HeaderColor = data.allImageSharp.edges
    .filter(edge => edge.node.fluid.originalName === headerColor)
    .map(myImage => <Img fluid={myImage.node.fluid} />);

  // const FooterImg = data.allImageSharp.edges
  //   .filter(edge => edge.node.fluid.originalName === footerImg)
  //   .map(myImage => <Img fluid={myImage.node.fluid} />);

  return (
    <>
      <div className="internal-header-wrapper">
        <Row>
          <div className="header-color">
            {HeaderColor}
          </div>
        </Row>
        <Row>
          <Col sm="12">
            {TheImageYouWant}
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <div className="internal-header-title">
              {HeaderTitle}
            </div>
            <div className="internal-header-subtitle">
              <p>{internalHeaderSubtitle}</p>
            </div>
          </Col>
        </Row>

          <div className="footer-img">
            {/* {FooterImg} */}
          </div>
      </div>
    </>
  )
}

export default InternalHeader