import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';

import "./style.css"

import Unit from "./unit.js"

const UnitTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <>
            <section className="unit-tabs">
                <Container>
                    <Row>
                        <h1 className="section-title text-uppercase"> nossas <span className="red-text">unidades</span></h1>
                        <div className="redline"></div>
                    </Row>
                    <Row>
                        <p className="section-subtitle">O Grupo Ativa possui unidades estratégicamentes localizadas <br /> para melhor atender seus clientes.</p>
                    </Row>
                </Container>
                {/* TAB ITEMS */}
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            DIONÍSIO CERQUEIRA<br/>
                            /CS
                            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            ITAJAI<br/>
                            /SC
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            são francisco do sul<br/>
                            /sc
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4'); }}
                        >
                            foz do iguaçu<br/>
                            /pr
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '5' })}
                            onClick={() => { toggle('5'); }}
                        >
                            são paulo<br/>
                            /sp
                        </NavLink>
                    </NavItem>
                </Nav>

                {/* /TAB ITEMS  */}
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">

                    </TabPane>
                    <TabPane tabId="2">
                        <Unit
                            unitImg="moldura-foto-unidade_05.png"
                            unitName="Itajaí"
                            unitText="Texto sobre o municipio, apresentando a cidade em alungs aspectos interessantes para a Unidade"
                            unitAdress="Av. Osvaldo Reis, 3281 - 18 andar - Ed. Rivieira Business Bairro Bal, Santa Clara, Praia Brava - CEP 88306 773 Itajai/SC"
                            unitMail="contato@grupoativa.net"
                            unitPhone="(47) 2104 6900"
                        />
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <h4>Tab 3 Contents</h4>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="4">
                        <Row>
                            <Col sm="12">

                                <h4>Tab 4 Contents</h4>
                            </Col>

                        </Row>
                    </TabPane>
                    <TabPane tabId="5">
                        <Row>
                            <Col sm="12">

                                <h4>Tab 5 Contents</h4>
                            </Col>

                        </Row>
                    </TabPane>
                </TabContent>
            </section>
        </>
    )
}
export default UnitTabs