import React from "react"

import "./style.css"

//icons
import { Icon, InlineIcon } from '@iconify/react';
import worldIcon from '@iconify/icons-whh/world';
import groupsIcon from '@iconify/icons-dashicons/groups';
import starOutlined from '@iconify/icons-ant-design/star-outlined';
import heartOutlined from '@iconify/icons-ant-design/heart-outlined';

import { Container, Row, Col } from "reactstrap"

const Statistics = () => {
    return (
        <>
            <section className="stats-section">
                <Container className="stats-container">
                <Row noGutters>
                    <Col className="quote">
                        <p className="quote-text">
                            “Nossa solidez de mercado está amparada nas soluções personalizadas 
                            que são pensadas para atender às necessidades específicas de cada cliente. 
                            Eficiência, inovação, confiança e comprometimento fazem parte do nosso DNA.”
                          </p>
                          <p className="quote-autor">Adenor Pereira</p>
                          <p className="quote-info">Presidente e Fundador do Grupo Ativa</p>
                    </Col>
                </Row>
                </Container>
            </section>
        </>
    )
}

export default Statistics