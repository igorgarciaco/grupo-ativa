import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./style.css"


const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_tracedSVG
            
          }
        }
      }
    }
  `)
  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
}

export default Logo
