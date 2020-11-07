import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./style.css"
import "./internal.css"
import { Container, Row, Col } from "reactstrap"

import WhatsAppLogo from "../background/whatsapp-logo-1.png"

import AssessoriaForm from "../components/SpecialistForm/LogisticaForm.js"
import SpecialistProfile from "../components/SpecialistProfile"

import InternalColor from "../components/InternalHeader/color.js"
import InternalLogo from "../components/InternalLogo"
import InternalHeader from "../components/InternalHeader"

export const query = graphql`
query {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/logistica/"}}
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
        <div className="internal-page red logistica">
            <Layout>
                <SEO title="Ativa Logística" />
                <section className="internal-first-section">
                    <InternalColor
                        headerColor="topo-red.png"
                    />
                    <InternalHeader
                        internalHeaderImg="logistica-header.jpg"
                        internalHeaderTitle="logistica-header-title.png"
                    />
                    <Container className="assessoria-wrapper">
                        <Row>
                            <Col md="6">
                                <h2 className="text-uppercase internal-title internal-title-2">
                                    <span>ATIVA</span> logistica
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
                                <p>Quer orientação ou cotação? Envie um e-mail para o nosso especialista utilizando o formulário abaixo ou fale diretamente com o especialista</p>
                                <AssessoriaForm />
                            </Col>
                            <Col md="6">
                            <div className="whatsapp-link">
                                    <div className="whatsapp-link-pop">
                                        <span>Fale com um especialista. Se preferir, podemos te ligar.</span>
                                    </div>
                                    <a href="https://api.whatsapp.com/send?phone=5547996011648&text=Olá">
                                        <img src={WhatsAppLogo} ></img>
                                    </a>
                                </div>
                                <div className="assessoria-specialist">

                                    <SpecialistProfile
                                        specPhoto="avatar_logistica.png"
                                        specName="Gilberto do Nascimento"
                                        specMail="gilberto@grupoativa.net"
                                        specNumber="(47) 9 9601 1648"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6"></Col>
                            <Col md="6">
                                <InternalLogo brandLogo="logo-logistica-2.png" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </div>
    </>
)

export default ApoemaPage