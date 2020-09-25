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
    render() {
        const { status } = this.state;
        return (
            <Form
                onSubmit={this.submitForm}
                action="https://getform.io/f/edbf0b72-1d66-4d50-a408-f33eef05f2f0"
                method="POST"
                className="form"
                inline
            >
                <Row form style={{textAlign: "center"}}>
                    <Col md={12}>
                        <FormGroup className="question-form-group">
                            Olá <Input className="question-input input" size="13" type="text" name="_replyto" id="fullName" placeholder="seu nome aqui" required/> , será uma satisfação <br /> 
              </FormGroup>
                            <span >
                                ler sua mensagem. Para que possamos
                                </span>
                    </Col>
                    <Col md={12}>
                        <FormGroup className="question-form-group">
                            retornar, <Input className="question-input input" size="10" type="email" name="email" id="email" placeholder="e-mail aqui." required/>
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup className="question-form-group">
                            Em que podemos lhe ajudar? <Input className="question-input input" size="13" type="text" name="text" id="message" placeholder="mensagem aqui." required/>
                        </FormGroup>
                    </Col>

                    {status === "SUCCESS" ? <p className="form-feedback">Formulário Enviado!</p> :
                        <Col md={12} className="submit-col question-input">
                            <Button className="btn-question-form">ENVIAR</Button>
                        </Col>
                    }
                    {status === "ERROR" && <p className="form-feedback">Ooops! Não foi possível enviar.</p>}
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