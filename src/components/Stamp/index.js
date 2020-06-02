import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Col } from "reactstrap"

import "./style.css"

const Stamp = ({ stampFile }) => {
    const data = useStaticQuery(
        graphql`
          query stampImg{
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

    const TheStampYouWant = data.allImageSharp.edges
        .filter(edge => edge.node.fluid.originalName === stampFile)
        .map(myImage => <Img fluid={myImage.node.fluid} />);

    return (
        <>
            <div className="stamp">
                {TheStampYouWant}
            </div>
        </>
    )
}

export default Stamp