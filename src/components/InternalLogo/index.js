import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./style.css"

const InternalLogo = ({ brandLogo }) => {
    const data = useStaticQuery(
        graphql`
              query {
                allImageSharp {
                  edges {
                    node {
                      fixed(width:200) {
                        ...GatsbyImageSharpFixed_tracedSVG
                        originalName
                      }
                    }
                  }
                }
              }`,
    );

    const TheImageYouWant = data.allImageSharp.edges
        .filter(edge => edge.node.fixed.originalName === brandLogo)
        .map(myImage => <Img fixed={myImage.node.fixed} />);

    return (
        <>
            <div className="foo-logo-internal">
                {TheImageYouWant}
            </div>
        </>
    )
}

export default InternalLogo