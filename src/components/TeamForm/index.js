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
            <p className="section-subtitle">Preencha nosso formulário e anexe seu currículo. <br />
          Assim que tiver uma oportunidade, entratemos em contato. <br />
          Boa sorte!</p>
          </Row>
          <Row>
            <Form enctype="multipart/form-data" inline action="https://getform.io/f/739b4e05-0d91-4f60-9c17-d4cebcd621ac" method="POST">
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="text" name="full_Name" id="fullName" placeholder="Nome completo" />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="file" name="file" id="file" placeholder="Anexar Currículo" />
              </FormGroup>
              <Button type="submit" className="btn-danger btn-team-form">Enviar meu currículo</Button>
            </Form>
          </Row>
        </Container>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </section>
    </>
  );
}

export default TeamForm