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
          fixed(width: 200) {
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
                <p>
                  Desde 1995 atuando no mercado nacional e internacional, com soluções completas e personalizadas em exportação e importação integradas a uma equipe multidisciplinar, comprometida em oferecer atendimento de forma rápida e eficaz, com vasta experiência no comércio exterior, garantindo agilidade nos processos e otimização de custos, além de oferecer assessoria em exportação e importação; logística e armazéns gerais, transporte rodoviário nacional e internacional de cargas, assessoria jurídica na área tributária e aduaneira, certificações de produtos junto ao INMETRO e ANATEL e serviços contábeis com ênfase em benefícios fiscais.	

                </p>
                <p>
                O Grupo Ativa está presente em pontos estratégicos, próximos à fronteiras e Aduanas de Carga, preparado para realizar processos de desembaraço aduaneiro em todos os portos do Brasil, permitindo oferecer aos seus clientes maior liberdade para escolher a melhor opção de desembaraço de sua mercadoria com agilidade e segurança.	
                  </p>
            </div>
            <p> <Img fixed={data.placeholderImage.childImageSharp.fixed}/> </p>
        </Col>
    )
}
export default AboutText