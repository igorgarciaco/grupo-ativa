import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./style.css"
import "./internal.css"
import { Container, Row, Col } from "reactstrap"

import WhatsAppLogo from "../background/whatsapp-logo-1.png"
import BoxImg from "../images/internal-content/apoema-img-1.png"

import ApoemaForm from "../components/SpecialistForm/ApoemaForm.js"
import SpecialistProfile from "../components/SpecialistProfile"
import InternalHeader from "../components/InternalHeader"
import InternalColor from "../components/InternalHeader/color.js"
import InternalLogo from "../components/InternalLogo"

const ApoemaPage = () => (
    <>
        <div className="internal-page">
            <Layout>
                <SEO title="Apoema" />
                <section className="internal-first-section">
                    <InternalColor 
                        headerColor="topo-apoema.png"
                    />
                    <InternalHeader
                        internalHeaderImg="foto-bg_02.jpg"
                        internalHeaderTitle="apoema-header-title.png"
                    />
                    <Container className="apoema-wrapper internal-container">
                        <Row className="internal-header-row">
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <h2 className="text-uppercase internal-title">
                                    <span className="apoema-color">APOEMA</span> COMÉRCIO E SERVIÇOS
                            </h2>
                                <p align="justify">
                                    orem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, ligula vel luctus ullamcorper, elit neque varius dui, eget congue nibh justo a urna. Donec sollicitudin varius metus et ornare. Maecenas maximus placerat volutpat. Curabitur facilisis justo sed neque consequat varius. Nulla lacinia, lectus eget ultrices ullamcorper, felis ipsum porta sem, at gravida velit est nec orci. Integer eget tellus vitae tellus pulvinar scelerisque congue in ligula. Phasellus dictum egestas turpis, convallis condimentum leo.

                                    Fusce a pellentesque lacus, in fringilla arcu. Quisque eros odio, placerat vel fermentum sed, lobortis sit amet urna. Ut aliquam elit ac lectus lobortis, sed ultrices purus fringilla. Maecenas sollicitudin venenatis tristique. In sagittis viverra placerat. Aenean nulla nulla, blandit non auctor sed, dapibus sit amet sapien. Proin malesuada orci ut vulputate ultrices. Praesent tincidunt arcu nisl, in convallis ipsum fringilla vel. Aenean feugiat at justo ut faucibus. Proin ligula magna, malesuada a urna a, iaculis accumsan nibh. Fusce justo lacus, dictum quis nunc ac, fringilla fringilla nunc. Aliquam sagittis sapien enim, vitae hendrerit odio hendrerit nec. Donec consectetur aliquet magna quis pellentesque. Vivamus ut dignissim justo. Pellentesque maximus, lorem ac suscipit mattis, ligula sapien aliquet metus, id sagittis velit ipsum at ligula. Donec et sapien commodo, eleifend eros vel, molestie urna.
                    </p>
                            </Col>
                            <Col md="6">
                                <img src={BoxImg} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Conheça alguns escopos de produtos que já fazem parte do atendimento cotidiano da APOEMA:</p>
                                <ul>
                                    <li>Artigos para festas</li>
                                    <li>Artigos Escolares</li>
                                    <li>Brinquedos</li>
                                    <li>Cosméticos</li>
                                    <li>EPI's</li>
                                    <li>Eletrodomésticos e similares</li>
                                    <li>Lampadas LED</li>
                                    <li>Panelas metálicas</li>
                                    <li>Módulos fotovoltaicos e inversores, entre outos</li>
                                </ul>
                                <p>É possivel contar com a expertise da APOEMA, especialista na gestao de certificaçoes, para realizar a importação de modo simples, ágil eseguro, sem se preocupar com as etapas burcr´ticas do processo evitando prejuízos e atrasos para o seu negócio.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="spec-contact">
                    <Container>
                        <Row>
                            <Col md="6">
                                <h2 className="text-uppercase">Fale com um especialista</h2>
                            </Col>
                            <Col md="6">
                                <div className="whatsapp-link">
                                    <div className="whatsapp-link-pop">
                                        <span>Fale com um especialista. Se preferir, podemos te ligar.</span>
                                    </div>
                                    <a href="https://api.whatsapp.com/send?phone=554999853337&text=Olá">
                                        <img src={WhatsAppLogo} ></img>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <p>Quer oritenação ou cotação? Envie um e-mail para o nosso especialista utilizando o formulário abaixo ou fale diretamente com o especialista</p>
                                <ApoemaForm />
                            </Col>
                            <Col md="6">
                                <div className="apoema-specialist">

                                    <SpecialistProfile
                                        specPhoto="avatar_apoema.png"
                                        specName="Eloir da Luz"
                                        specMail="ivandro@grupoativa.net"
                                        specNumber="(49)9 985 3337"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6"></Col>
                            <Col md="6">
                                <InternalLogo brandLogo="logo-apoema.png" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </div>
    </>
)

export default ApoemaPage