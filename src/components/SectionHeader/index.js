import React from 'react'

import "./style.css"

import { Container, Row, Col } from "reactstrap"

const SectionHeader = () => {
    return (
        <>
            <section className="first-section-header row-services">
                <Container className="section-header"
                >
                    <Row>
                        <Col className="text-center section-header-col">
                            <div
                                data-sal="slide-left"
                                data-sal-delay="300"
                                data-sal-easing="ease"
                                data-sal-duration="600"
                            >
                                <h1 className="text-uppercase section-title">Nossos <span className="red-text">serviços</span></h1>
                                <div className="redline"></div>
                                <p className="section-subtitle">
                                    Soluções em importação e exportação, serviços de armazenagem e logística, transporte rodoviário de cargas, certificações de produtos importados, assessoria jurídica e contabilidade especializada em comércio exterior.
<br />
                                    <b>
                                        Conheça as soluções que podemos oferecer ao seu negócio!
                                    </b>
                                </p>
                            </div>
                        </Col>
                        <Col md="1"></Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SectionHeader
