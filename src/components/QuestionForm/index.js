import React from "react"

import "./style.css"

import { Container, Row, Col, Button } from 'reactstrap';

import FormData from "./Form.js"

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
                    <FormData />
                </Container>
            </section>
        </>
    )
}

export default QuestionForm