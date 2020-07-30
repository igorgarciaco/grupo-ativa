import React from "react"
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import "./style.css"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
      <section className="team-form-section">
        <Container className="team-form-container">
          <Row>
            <h1 className="section-title text-uppercase">FAÇA PARTE <br /> da NOSSA <span className="red-text">EQUIPE</span></h1>
          </Row>
          <Row>
            <p className="section-subtitle">
            O Grupo Ativa valoriza o capital humano e o considera essencial para o desenvolvimento e progresso. 
Buscamos pessoas visionárias, dedicadas e com empatia pelo trabalho em equipe.  
Se você se identifica com estes valores, anexe abaixo seu currículo em nosso banco de talentos. 
A equipe de RH analisará seu perfil e entraremos em contato caso você se encaixe em uma das nossas oportunidades de trabalho.
          </p>
          </Row>
          <Row>
            <Form enctype="multipart/form-data" inline action="https://getform.io/f/739b4e05-0d91-4f60-9c17-d4cebcd621ac" method="POST">
              <Col md="4">

              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="text" name="full_Name" id="fullName" placeholder="Nome completo" />
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
          </Row>
        </Container>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </section>
    </>
  );
}

export default TeamForm