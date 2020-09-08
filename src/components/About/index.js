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
                Somos uma empresa moderna e totalmente comprometida em oferecer soluções para a área de comércio exterior. Contamos com vasta experiência no mercado nacional e internacional no qual atuamos, desde 1995, com foco em qualidade, agilidade e resultados.  

                Nossa estrutura é abrangente. Envolve desde assessoria em processos de importação e exportação, passando por serviços de armazenagem e logística, transporte rodoviário de cargas no Brasil e países da América do Sul, assessoria jurídica na área tributária e aduaneira, contabilidade especializada em benefícios fiscais até certificações de produtos junto a órgãos como INMETRO (Instituto Nacional de Metrologia, Qualidade e Tecnologia) e ANATEL (Agência Nacional de Telecomunicações). 
                  </p>  
            <p>Além do aprimoramento profissional constante, estamos atentos às mudanças no que diz respeito a estrutura física. Por isso, investimos constantemente em equipamentos de ponta para inovar e se adaptar as novas tendências de mercado.
            A capacidade de identificar e atender necessidades, fidelização de clientes através da oferta de soluções inteligentes e competitivas, marcam a nossa trajetória de expansão. Atualmente, estamos presentes nas cidades estratégicas de Dionísio Cerqueira (SC), Itajaí (SC), São Francisco do Sul (SC) e Foz do Iguaçu (PR) oferecendo soluções que atravessam fronteiras internacionais. </p>
            </div>
            
            <p> <Img fixed={data.placeholderImage.childImageSharp.fixed}/> </p>
        </Col>
    )
}
export default AboutText