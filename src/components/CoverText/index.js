import React from "react"

import { Container, Row, Col } from "reactstrap"

import "./style.css"

const CoverText = () => {

    var ReactRotatingText = require('react-rotating-text');

    return (
        <Container>
            <Row>
                <Col>
                    <div className="cover-text" id="coverText">
                        <p className="cover-title text-uppercase">
                            Nosso propósito<br /> nos torna diferente.<br />
                            além de serviços entregamos <br />
                            <span className="we-offer">
                                <ReactRotatingText cursor={false} items={['estratégias personalizadas', ' RESULTADOS', 'SOLUÇÕES', 'SEGURANÇA', 'INOVAÇÃO']} />.
                            </span>
                        </p>
                        {/* <p className="cover-subtitle">O Grupo Ativa reúne varios serviços interligados que se fundem para<br /> lhe oferecer um só resultado; a sua satisfação!</p> */}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CoverText