import React from "react"
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import "./style.css"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {

  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "kedma.png" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid_tracedSVG
          
        }
      }
    }
  }
`)

  return (
    <>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </>
  );
}

export default Image