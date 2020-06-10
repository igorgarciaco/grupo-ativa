import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./style.css"


const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bg-home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1900) {
            ...GatsbyImageSharpFluid_withWebp
            
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} className="cover-image"/>
}

export default Image
