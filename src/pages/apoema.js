import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./style.css"
import "./internal.css"
import { Container, Row, Col } from "reactstrap"

import WhatsAppLogo from "../background/whatsapp-logo-1.png"

import ApoemaForm from "../components/SpecialistForm/ApoemaForm.js"
import SpecialistProfile from "../components/SpecialistProfile"
import InternalHeader from "../components/InternalHeader"
import InternalColor from "../components/InternalHeader/color.js"
import InternalLogo from "../components/InternalLogo"


export const query = graphql`
query {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/apoema/"}}
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
        <div className="internal-page apoema orange">
            <Layout>
                <SEO title="Apoema" />
                <section className="internal-first-section">
                    <InternalColor
                        headerColor="topo-apoema.png"
                    />
                    <InternalHeader
                        internalHeaderImg="foto-bg_02.jpg"
                        internalHeaderTitle="apoema-header-title.png"
                    />
                    <Container className="apoema-wrapper internal-container">
                        <Row className="internal-header-row">
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <h2 className="text-uppercase internal-title">
                                    <span className="apoema-color">APOEMA</span> COMÉRCIO E SERVIÇOS
                            </h2>
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
                                <h2 className="text-uppercase ">Fale com um especialista</h2>
                            </Col>
                            <Col md="6">
                               
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <p>Quer orientação ou cotação? Envie um e-mail para o nosso especialista utilizando o formulário abaixo ou fale diretamente com o especialista</p>
                                <ApoemaForm />
                            </Col>
                            <Col md="6">
                            <div className="whatsapp-link">
                                    <div className="whatsapp-link-pop">
                                        <span>Fale com nosso especialista.</span>
                                    </div>
                                    <a href="https://api.whatsapp.com/send?phone=5547992280941&text=Olá">
                                        <img src={WhatsAppLogo} ></img>
                                    </a>
                                </div>
                                <div className="apoema-specialist">

                                    <SpecialistProfile
                                        specPhoto="avatar_apoema.png"
                                        specName="Eloir da Luz"
                                        specMail="eloir@grupoativa.net"
                                        specNumber="(47) 9 9228 0941"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6"></Col>
                            <Col md="6">
                                <InternalLogo brandLogo="logo-apoema-2.png" /><br/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </div>
    </>
)

export default ApoemaPage