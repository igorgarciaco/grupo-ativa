import React from "react";
import "./style.css"

import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';

export default class ApoemaForm extends React.Component {
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
                action="https://getform.io/f/19980984-e126-4d53-94a0-dedb15c3607f"
                method="POST"
                className="internal-form"
            >
                <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Input type="text" name="_replyto" placeholder="Nome completo" required/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Input type="email" name="email" placeholder="Seu e-mail" required/>
                    </FormGroup>
                </Col>
                <Col sm={12}>
                <FormGroup>
                    <Input type="textarea" name="message" placeholder="Em que posso lhe ajudar? Digite aqui" />
                </FormGroup>
                </Col>
                {status === "SUCCESS" ? <p>Formulário Enviado!</p> :
                <Col sm={12} className="submit-col">
                    <Button className="assessoria-submit">Enviar</Button>
                </Col>
                 }
                {status === "ERROR" && <p>Ooops! Não foi possível enviar.</p>}
                </Row>
            </Form>
        );
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