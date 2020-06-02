import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./style.css"

import { Col } from "reactstrap"

const AboutText = () => {

    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "assinatura-diretor_03.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_tracedSVG
            
          }
        }
      }
    }
  `)
  

    return (
        <Col md="8" className="about-text">
            <h1 className="text-uppercase about-title">Sobre o grupo <span className="red-text">ativa</span></h1>
            <div className="first-redline"></div>
            <div className="second-redline"></div>
            <div className="about-paragraph">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non justo sollicitudin odio sodales ornare vitae vel eros. Nullam mollis, arcu at dignissim lacinia, massa enim varius nibh, vel fringilla velit eros sed ex. Integer nec venenatis arcu. Aliquam fringilla commodo ex. Nulla facilisi. Maecenas at viverra justo, ut tincidunt lorem. Donec feugiat eleifend lobortis. Integer finibus nunc sed luctus consectetur. Etiam placerat justo quis nisi luctus, id faucibus tortor sagittis. In hac habitasse platea dictumst. Mauris in ante tempor, pellentesque libero quis, hendrerit lectus. Ut feugiat varius sodales. Pellentesque ultrices ligula ac nisl pulvinar condimentum. Nullam hendrerit, felis eu interdum dignissim, neque lectus tempor libero, a congue magna sem vel sem.</p>
                <p>Curabitur semper lorem in ligula ornare, gravida rutrum nunc venenatis. Quisque interdum viverra tellus eu ullamcorper. In fermentum metus quis est vehicula, sed porta elit gravida. Curabitur et hendrerit purus.</p>
            </div>
            <p> <Img fixed={data.placeholderImage.childImageSharp.fixed}/> </p>
        </Col>
    )
}
export default AboutText