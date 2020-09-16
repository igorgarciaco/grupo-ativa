import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./style.css"
import "./internal.css"
import { Container, Row, Col } from "reactstrap"

import WhatsAppLogo from "../background/whatsapp-logo-1.png"

import AssessoriaForm from "../components/SpecialistForm/KeywestForm.js"
import SpecialistProfile from "../components/SpecialistProfile"

import InternalColor from "../components/InternalHeader/color.js"
import InternalLogo from "../components/InternalLogo"
import InternalHeader from "../components/InternalHeader"

export const query = graphql`
query {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/keywest/"}}
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
        <div className="internal-page yellow keywest">
            <Layout>
                <SEO title="Key West Transportes" />
                <section className="internal-first-section">
                    <InternalColor
                        headerColor="topo-keywest.png"
                    />
                    <InternalHeader
                        internalHeaderImg="keywest-header.jpg"
                        internalHeaderTitle="keywest-header-title.png"
                    />
                    <Container className="keywest-wrapper">
                        <Row>
                            <Col md="6">
                                <h2 className="text-uppercase internal-title internal-title-2">
                                    <span>KEY WEST</span><br/> transportes
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
                                <p>Deseja cotação ou orientação?</p>
                                <p> Use o formulário abaixo ou o contato de e-mail e telefone, que está disponível ao lado, para falar diretamente com o profissional responsável pelo serviço. </p>
                                <AssessoriaForm />
                            </Col>
                            <Col md="6">
                            <div className="whatsapp-link">
                                    <div className="whatsapp-link-pop">
                                        <span>Fale com um especialista. Se preferir, podemos te ligar.</span>
                                    </div>
                                    <a href="https://api.whatsapp.com/send?phone=5549999239279&text=Olá">
                                        <img src={WhatsAppLogo} ></img>
                                    </a>
                                </div>
                                <div className="keywest-specialist">

                                    <SpecialistProfile
                                        specPhoto="avatar_keywest.png"
                                        specName="Marcelo Mainardi"
                                        specMail="marcelo@grupoativa.net"
                                        specNumber="(49) 9 9923 9279"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6"></Col>
                            <Col md="6">
                                <InternalLogo brandLogo="logo-keywest-2.png" /><br />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </div>
    </>
)

export default ApoemaPage