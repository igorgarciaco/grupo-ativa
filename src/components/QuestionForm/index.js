import React from "react"

import "./style.css"

import { Container, Row, Col, Button } from 'reactstrap';

const QuestionForm = () => {

    return (
        <>
            <section className="question-form-wrap" id="contact">
            <Container>
                    <Row className="section-title-row">
                        <h2 className="section-title text-uppercase"> <span>DÚVIDAS?</span> Podemos ajuda-lo </h2>
                    </Row>
                    <Row>
                        <p className="section-subtitle">Mande a sua dúvida, opinião ou questo por aqui. Nosso especialistas estão aqui <br /> para ajuda-lo a traçar um caminho para o sucesso.</p>
                    </Row>
                </Container>
                <Container >
                    <Row>
                        <form action="https://getform.io/f/739b4e05-0d91-4f60-9c17-d4cebcd621ac" method="POST">
                            <Col md="12">
                                <label>
                                    Olá &nbsp;
                                    <input size="13" type="text" name="fullName" id="fullName" placeholder="seu nome aqui" />
                                     , gostarámos
                                muito de receber a sua dúvida e ou sugestão.
                                </label>

                            </Col>
                            <Col md="12">

                                <label>
                                    Informe seu  <input size="10" type="email" name="email" id="email" placeholder="e-mail aqui." />
                                </label>
                            </Col>
                            <Col md="12">

                                <label>
                                    Ok, agora escreva a sua <input size="11" type="text" name="text" id="message" placeholder="mensagem aqui." />
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