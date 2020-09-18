import React from "react"
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import "./style.css"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Image from "./image.js"

const TeamForm = () => {

  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "bg-equipe_02.png" }) {
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
      <section className="team-form-section" id="teamForm">
        <Container className="team-form-container">
          <Row>
            <h1 className="section-title text-uppercase">FAÇA PARTE <br /> da NOSSA <span className="red-text">EQUIPE</span></h1>
          </Row>
          <Row>
            <Col md="4">
              <Image />
            </Col>
            <Col md="8">
              <div className="section-subtitle">
                <p>
                  Para alcançar a excelência nos serviços prestados o Grupo Ativa aposta na valorização do capital humano, pois o reconhece como essencial para o desenvolvimento e progresso. Por isso, conta com equipe qualificada e multidisciplinar, preparada para oferecer o melhor desempenho operacional.
              </p>
                <div className="quote-2">

                  <i>“Ao longo dos anos buscamos oferecer oportunidades para o crescimento e o desenvolvimento das habilidades de nossos colaboradores, respeitando suas aptidões e proporcionando um ambiente de trabalho familiar e acolhedor.”</i>
                  <p className="quote-autor">
                    <i>
                      Kedma Pereira
                       </i>
                  </p>
                  <p className="quote-info">
                    <i>
                      Diretora e sócia-fundadora do Grupo Ativa
                        </i>
                  </p>
                </div>
                <p>Buscamos pessoas visionárias, dedicadas e com empatia pelo trabalho em equipe. Se você se identifica com estes valores, anexe o seu currículo em nosso banco de talentos. A equipe de RH analisará seu perfil e entraremos em contato caso você se encaixe em uma das nossas oportunidades de trabalho. </p>
              </div>

              <Form enctype="multipart/form-data" inline action="https://getform.io/f/d2337403-804c-40bc-8c54-1c02e5e33fc1" method="POST">
                <Col md="4">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input type="text" name="full_Name" id="fullName" placeholder="Nome completo" className="team-name" />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input type="file" name="file" id="file" placeholder="Anexar Currículo" />
                  </FormGroup>
                </Col>
                <Col md="4">

                  <Button type="submit" className="btn-danger btn-team-form">Enviar meu currículo</Button>
                </Col>
              </Form>

            </Col>

          </Row>
        </Container>
        <div className="form-ilustration">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
      </section>
    </>
  );
}

export default TeamForm