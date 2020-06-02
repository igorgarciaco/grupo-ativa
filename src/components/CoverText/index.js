import React from "react"

import { Container, Row, Col } from "reactstrap"

import "./style.css"

const CoverText = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <div className="cover-text">
                        <p className="cover-title text-uppercase">Não oferecemos serviços, <br />oferecemos <span className="we-offer">segurança,</span></p>
                        <p className="cover-subtitle">O Grupo Ativa reúne varios serviços interligados que se fundem para<br /> lhe oferecer um só resultado; a sua satisfação!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CoverText