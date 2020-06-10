import React from "react"

import "./style.css"
import { Container, Row, Col } from "reactstrap"

import Layout from "../components/layout"
import CoverImage from "../components/CoverImage"
import SEO from "../components/seo"

import CoverText from "../components/CoverText";
import ProfilePhoto from "../components/ProfilePhoto"
import Stamp from "../components/Stamp"
import AboutText from "../components/About"
import SectionHeader from "../components/SectionHeader"
import Statistics from "../components/Statistics"

import Assessoria from "../components/Services/assessoria.js"
import Apoema from "../components/Services/apoema.js"
import Contabilidade from "../components/Services/contabilidade.js"
import Logistica from "../components/Services/logistica.js"
import Juridico from "../components/Services/juridico.js"
import KeyWest from "../components/Services/keywest.js"

import TeamForm from "../components/TeamForm"
import UnitTabs from "../components/UnitTabs"
import QuestionForm from "../components/QuestionForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <CoverImage />
      <div className="cover-overlay">
        <CoverText />
      </div>
      <section className="about-section" id="aboutSection">
        <Container>
          <Row className="mt-5 about-row">
            <Col md="4" className="profile-col">
              <ProfilePhoto profilePhoto="foto-diretor.jpg" />
              <Stamp stampFile="selo-25.png" />
            </Col>
            <AboutText />
          </Row>
        </Container>
      </section>
      <Statistics />
      <SectionHeader />
        <Assessoria
          serviceImg="servicos_06.png"
          serviceLogo="logo-assessoria.png"
          serviceText="No mercado desde 1995, o Grupo Ativa Assessoria Aduaneira
                é especializado em despachos aduaneiros no setor marítimo,
                aéreo, ferroviário e terrestre, assessorando as empresas junto
                à alfândega e demais órgaos públicos"/>
      <Apoema
        serviceImg="servicos_14.png"
        serviceLogo="logo-apoema.png"
        serviceText="No mercado desde 1995, o Grupo Ativa Assessoria Aduaneira é 
      especializado em despachos aduaneiros no setor marítimo, aéreo, ferroviário e 
      terrestre, assessorando as empresas junto á afândega e demais órgãos públicos."/>
      <Contabilidade
        serviceImg="servicos_22.png"
        serviceLogo="logo-contabilidade.png"
        serviceText="No mercado desde 1995, o Grupo Ativa Assessoria Aduaneira é 
      especializado em despachos aduaneiros no setor marítimo, aéreo, ferroviário e 
      terrestre, assessorando as empresas junto á afândega e demais órgãos públicos."/>
      <Logistica
        serviceImg="servicos_30.png"
        serviceLogo="logo-logistica.png"
        serviceText="No mercado desde 1995, o Grupo Ativa Assessoria Aduaneira é 
      especializado em despachos aduaneiros no setor marítimo, aéreo, ferroviário e 
      terrestre, assessorando as empresas junto á afândega e demais órgãos públicos."/>
      <Juridico
        serviceImg="servicos_38.png"
        serviceLogo="logo-juridico.png"
        serviceText="No mercado desde 1995, o Grupo Ativa Assessoria Aduaneira
                é especializado em despachos aduaneiros no setor marítimo,
                aéreo, ferroviário e terrestre, assessorando as empresas junto
                à alfândega e demais órgaos públicos"/>
      <KeyWest
        serviceImg="servicos_45.png"
        serviceLogo="logo-keywest.png"
        serviceText="No mercado desde 1995, o Grupo Ativa Assessoria Aduaneira é 
      especializado em despachos aduaneiros no setor marítimo, aéreo, ferroviário e 
      terrestre, assessorando as empresas junto á afândega e demais órgãos públicos."/>

      <TeamForm />
      <UnitTabs />
      <QuestionForm />

    </div>
  </Layout>
)

export default IndexPage
