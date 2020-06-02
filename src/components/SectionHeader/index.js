import React from "React"

import "./style.css"

import { Container, Row, Col } from "reactstrap"

const SectionHeader = () => {
    return (
        <>
            <section className="first-section-header">
                <Container className="section-header">
                    <Row>
                        <Col className="text-center section-header-col">
                            <h1 className="text-uppercase section-title">Nossos <span className="red-text">serviços</span></h1>
                            <div className="redline"></div>
                            <p className="section-subtitle">O Grupo Ativa possui unidades estratégicamente localizadas para melhor atender seus clientes</p>
                        </Col>
                        <Col md="1"></Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SectionHeader
