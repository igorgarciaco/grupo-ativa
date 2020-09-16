import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./style.css"
import "./internal.css"
import { Container, Row, Col } from "reactstrap"

import WhatsAppLogo from "../background/whatsapp-logo-1.png"

import AssessoriaForm from "../components/SpecialistForm/AssessoriaForm.js"
import SpecialistProfile from "../components/SpecialistProfile"

import InternalColor from "../components/InternalHeader/color.js"
import InternalLogo from "../components/InternalLogo"
import InternalHeader from "../components/InternalHeader"

export const query = graphql`
query {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/contabilidade/"}}
  ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
}
`

const md = (data) => {
    const { frontmatter, html } = data.data.allMarkdownRemark.edges[0].node
    console.log(frontmatter.title)
    return (<div>
        {/* <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p> */}
        <div
            dangerouslySetInnerHTML={{ __html: html }}
        />
    </div>)
}


const ApoemaPage = ({ data }) => (
    <>
        <div className="internal-page red contabilidade">
            <Layout>
                <SEO title="Contabilidade" />
                <section className="internal-first-section">
                    <InternalColor
                        headerColor="topo-red.png"
                    />
                    <InternalHeader
                        internalHeaderImg="contabilidade-header.jpg"
                        internalHeaderTitle="contabilidade-header-title.png"
                    />
                    <Container className="assessoria-wrapper">
                        <Row>
                            <Col md="6">
                                <h2 className="text-uppercase internal-title internal-title-2">
                                    <span>ATIVA</span> contabilidade
                            </h2>

                            </Col>
                            <Col md="6">
                            </Col>
                        </Row>
                        <Row>
                            {md({ data })}
                        </Row>
                    </Container>
                </section>
                <section className="spec-contact">
                    <Container>
                        <Row>
                            <Col md="6">
                                <h2 className="text-uppercase">Fale com um especialista</h2>
                            </Col>
                            <Col md="6">
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <p>Quer oritenação ou cotação? Envie um e-mail para o nosso especialista utilizando o formulário abaixo ou fale diretamente com o especialista</p>
                                <AssessoriaForm />
                            </Col>
                            <Col md="6">
                            <div className="whatsapp-link">
                                    <div className="whatsapp-link-pop">
                                        <span>Fale com um especialista. Se preferir, podemos te ligar.</span>
                                    </div>
                                    <a href="https://api.whatsapp.com/send?phone=5549991294939&text=Olá">
                                        <img src={WhatsAppLogo} ></img>
                                    </a>
                                </div>
                                <div className="assessoria-specialist">

                                    <SpecialistProfile
                                        specPhoto="avatar_contabilidade.png"
                                        specName="Javelenice Massaia"
                                        specMail="javelenice@grupoativa.net"
                                        specNumber="(49) 9 9129 4939"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6"></Col>
                            <Col md="6">
                                <InternalLogo brandLogo="logo-contabilidade.png" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </div>
    </>
)

export default ApoemaPage