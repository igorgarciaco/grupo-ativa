import React from "react"
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import "./style.css"

export default class FormOfTeamForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
      }
        render(){
          const { status } = this.state;
          return(
            <Form 
            onSubmit={this.submitForm}
            action="https://getform.io/f/d2337403-804c-40bc-8c54-1c02e5e33fc1" 
            method="POST"
            enctype="multipart/form-data" 
            inline 
            >
            <Row form>
            <Col md={4}>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="text" name="_replyto" id="fullName" placeholder="Nome completo" className="team-name" required/>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="file" name="file" id="file" placeholder="Anexar Currículo" requried/>
              </FormGroup>
            </Col>
  
              {status === "SUCCESS" ? <p>Formulário Enviado!</p> :
                  <Col md={4} className="submit-col">
              <Button type="submit" className="btn-danger btn-team-form">Enviar meu currículo</Button>
                  </Col>
                   }
                  {status === "ERROR" && <p>Ooops! Não foi possível enviar.</p>}
                  </Row>
          </Form>
  
          )
        }

        submitForm(ev) {
            ev.preventDefault();
            const form = ev.target;
            const data = new FormData(form);
            const xhr = new XMLHttpRequest();
            xhr.open(form.method, form.action);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    form.reset();
                    this.setState({ status: "SUCCESS" });
                } else {
                    this.setState({ status: "ERROR" });
                }
            };
            xhr.send(data);
        }
    }