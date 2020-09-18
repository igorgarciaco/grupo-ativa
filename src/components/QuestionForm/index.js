import React from "react"

import "./style.css"

import { Container, Row, Col, Button } from 'reactstrap';

const QuestionForm = () => {

    return (
        <>
            <section className="question-form-wrap" id="contact">
            <Container>
                    <Row className="section-title-row">
                        <h2 className="section-title text-uppercase"> <span>DÚVIDAS?</span> Podemos ajudá-lo. </h2>
                    </Row>
                    {/* <Row>
                        <p className="section-subtitle">
                        Estamos aqui para ajudá-lo. <br /> O Grupo Ativa conta com uma série de especialistas em cada setor, prontos para atender suas dúvidas e/ou sugestões.
                            </p>
                    </Row> */}
                </Container>
                <Container >
                    <Row>
                        <form action="https://getform.io/f/edbf0b72-1d66-4d50-a408-f33eef05f2f0" method="POST">
                            <Col md="12">
                                <label>
                                    Olá &nbsp;
                                    <input size="13" type="text" name="fullName" id="fullName" placeholder="seu nome aqui" />
                                     , será uma satisfação <br/> ler sua mensagem. Para que possamos
                                
                                </label>
                            </Col>
                            <Col md="12">

                                <label>
                                 retornar, <input size="10" type="email" name="email" id="email" placeholder="e-mail aqui." />
                                </label>
                            </Col>
                            <Col md="12">

                                <label>
                                    Em que podemos lhe ajudar? <input size="13" type="text" name="text" id="message" placeholder="mensagem aqui." />
                                </label>
                            </Col>
                            <Button className="btn-question-form">ENVIAR</Button>
                        </form>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default QuestionForm