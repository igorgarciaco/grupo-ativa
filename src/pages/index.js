import React from "react"

import "./style.css"
import { Container, Row, Col } from "reactstrap"

import Layout from "../components/layout"
import CoverImage from "../components/CoverImage"
import SEO from "../components/seo"

import CoverText from "../components/CoverText";
import ProfilePhoto from "../components/ProfilePhoto"
// import Stamp from "../components/Stamp"
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

import sal from 'sal.js'

// var sal = require('sal.js')

sal();

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
              <ProfilePhoto profilePhoto="foto-diretor.png" />
              {/* <Stamp stampFile="selo-25.png" /> */}
            </Col>
            <AboutText />
          </Row>
        </Container>
      </section>
      <Statistics />
      <SectionHeader />
        <Assessoria
          serviceImg="assessoria-img.png"
          serviceLogo="logo-assessoria.png"
          serviceText="A rotina do mercado internacional é dinâmica. 
          Exige atualizações constantes sobre os processos que regulamentam a entrada e a saída de 
          mercadorias de um país. É por isso que a atuação de uma assessoria aduaneira é fundamental! "/>
      <Apoema
        serviceImg="apoema-img.png"
        serviceLogo="logo-apoema.png"
        serviceText="A sua empresa precisa certificar um produto importado e não sabe por onde começar? 
        Oferecemos assessoria completa no processo de certificações de produtos importados. "/>
      <Contabilidade
        serviceImg="contabilidade-img.png"
        serviceLogo="logo-contabilidade.png"
        serviceText="Empresas da área de comércio exterior possuem necessidades fiscais e tributárias diferenciadas.
         Desde 2011, a Ativa Contabilidade é especializada em oferecer soluções, em serviços contábeis e de gestão. "/>
      <Logistica
        serviceImg="logistica-img.png"
        serviceLogo="logo-logistica.png"
        serviceText="Alguns produtos exigem espaços apropriados para a sua conservação. Algumas cargas
         podem demorar mais tempo para serem vendidas ou despachadas ao destino final e acabar gerando 
         custos extras com estadias de veículos. "/>
      <Juridico
        serviceImg="juridico-img.png"
        serviceLogo="logo-juridico.png"
        serviceText="A dinâmica do mercado global é complexa e exige que os negócios estejam dispostos a 
        lidar com situações peculiares e, por vezes, até inesperadas. Receba orientações seguras relacionadas 
        ao direito aduaneiro, internacional e tributário."/>
      <KeyWest
        serviceImg="keywest-img.png"
        serviceLogo="logo-keywest.png"
        serviceText=" Entendemos que muitos negócios exigem um plano de transportes diferenciado para os seus 
        produtos. Oferecemos soluções em operações logísticas, que são adaptáveis conforme a necessidade de
         nossos clientes e parceiros. "/>

      <UnitTabs />
      <TeamForm />

      <QuestionForm />

    </div>
  </Layout>
)

export default IndexPage
