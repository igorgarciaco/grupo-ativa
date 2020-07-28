import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import "./style.css"

const InternalColor = ({ headerColor }) => {

    const data = useStaticQuery(
        graphql`
              query internalColor{
                allImageSharp {
                  edges {
                    node {
                      fluid(maxWidth:1300, maxHeight: 120) {
                        ...GatsbyImageSharpFluid_tracedSVG
                        originalName
                      }
                    }
                  }
                }
              }`,
    );

    const TheColorYouWant = data.allImageSharp.edges
        .filter(edge => edge.node.fluid.originalName === headerColor)
        .map(myImage => <Img fluid={myImage.node.fluid} />);

    return (
        <>
        <div className="header-color">
            {TheColorYouWant}
        </div>
        </>
    )
}

export default InternalColor