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
            <section className="unit-tabs" id="units" >
                <Container>
                    <Row className="our-units">
                        <h1 className="section-title text-uppercase "> nossas <span className="red-text">unidades</span></h1>
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
                <TabContent >
                    <TabPane tabId="1">
                    <Unit
                            unitImg="unidade-dionisio.jpg"
                            unitName="Dionísio Cerqueira"
                            unitParagraph1="
                            O Grupo Ativa nasceu em Dionísio Cerqueira (SC), no ano de 1995, cidade estratégica para os negócios que envolvem o comércio exterior e a logística nos países da América do Sul, pois se trata da única fronteira seca de Santa Catarina, rota importante para as mercadorias que transitam entre os países vizinhos. Pela aduana de Dionísio Cerqueira flui a produção agrícola do Mercosul, assim como carnes, bobinas de papel e plástico, bebidas, vestuário e diversos tipos de alimentos, peças e maquinários.  
                             "
                            unitParagraph2="
                            A cidade de Dionísio Cerqueira está localizada na região do Extremo-Oeste do Estado, onde faz fronteira com a Argentina. A cidade de Bernardo de Irigoyen, no Estado de Missiones, está separada do município apenas pelo Rio Peperi Guaçu. Além disso, o município também faz divisa com o Estado do Paraná, pela cidade de Barracão e, está localizado a apenas 350 quilômetros da fronteira com o Paraguai.  
                            "
                            unitAdress="Av. Osvaldo Reis, 3281 - 18 andar - Ed. Rivieira Business Bairro Bal, Santa Clara, Praia Brava - CEP 88306 773 Itajai/SC"
                            unitMail="contato@grupoativa.net"
                            unitPhone="(47) 2104 6900"
                        />
                    </TabPane>
                    <TabPane tabId="2" activeTab={activeTab}>
                        <Unit
                            unitImg="moldura-foto-unidade_05.png"
                            unitName="Itajaí"
                            unitParagraph1="
                            Estamos presentes na cidade de Itajaí (SC) desde 2004. A localização é considerada estratégica para o nosso negócio, pois fica numa das margens do Complexo Portuário de Itajaí, onde estão localizados os Terminais Portuários APM Terminals ( Itajaí) e Portonave ( Navegantes).. Estes Portos são o principal canal de escoamento para diversos produtos fabricados no Brasil e na América do Sul, assim como são a porta de entrada para inúmeras cargas vindas de todos os continentes do mundo, via transporte marítimo, com destino a vários estados do país e países vizinhos. 
                            "
                            unitParagraph2="
                            O Complexo Portuário de Itajaí movimenta cargas conteinerizadas ( 2° no ranking Brasil de movimentação de contêineres), tais como produtos eletrônicos e mecânicos, papel e derivados, plásticos e borrachas, cerâmicas e vidros, agroindústria e alimentos em geral, veículos, produtos químicos, têxteis, madeiras e derivados. 
                            "
                            unitParagraph3="
                            Além de dois grandes Portos, com infraestrutura ideal para embarque e desembarque de contêineres, a região da Foz do Rio Itajaí-Açu também conta com terminais portuários equipados para movimentar cargas secas e refrigeradas, com terminais retroportuários alfandegados, armazéns e mão de obra especializada para atender às demandas específicas da logística e do comércio exterior. 
                            "
                            unitParagraph4="
                            A alta movimentação de cargas na Foz do Rio Itajaí também pode ser justificada pela posição geográfica privilegiada, no centro da região Sul do país. As capitais dos três Estados do Sul do Brasil (Florianópolis/SC, Curitiba/PR e Porto Alegre/RS) e a capital da maior cidade do país, São Paulo/SP, estão localizadas a menos de 600 quilômetros de distância, assim como há outras importantes cidades em seu entorno, como Joinville (SC) e Blumenau (SC). A região também está próxima das rodovias BR 101 e BR 470 (Rodovia do Frango) e dos aeroportos localizados nas cidades de Navegantes (SC) e Florianópolis (SC). 
                            "
                            unitParagraph5="
                            A localização privilegiada aliada a infraestrutura de serviços adequada, tornam a região de Itajaí (SC) uma grande concentradora e distribuidora de cargas, permitindo atender importantes mercados de exportação e importação, que é a nossa especialidade. 
                            "
                            unitAdress="Av. Osvaldo Reis, 3281 - 18 andar - Ed. Rivieira Business Bairro Bal, Santa Clara, Praia Brava - CEP 88306 773 Itajai/SC"
                            unitMail="contato@grupoativa.net"
                            unitPhone="(47) 2104 6900"
                        />
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <Unit
                            unitImg="unidade-sf.jpg"
                            unitName="São Francisco do Sul"
                            unitParagraph1="
                            Na região do litoral norte de Santa Catarina está localizado o Complexo da Baía da Babitonga, onde estão situados o Porto de São Francisco do Sul e o Porto de Itapoá. Desde 2007, o Grupo Ativa possui sede na cidade de São Francisco do Sul (SC), para estar conectado com as atividades de comércio exterior que movimentam a região.  
                            "
                            unitParagraph2="
                            Produtos como minério de ferro, grãos de soja, fertilizantes, combustíveis, peças, motores e equipamentos elétricos, automóveis, produtos químicos, madeira, cerâmica, papel, plásticos e proteína animal, passam pelos terminais portuários localizados na foz da Baía da Babitonga. 
                            "
                            unitParagraph3="
                            O Complexo está localizado entre duas regiões industriais relevantes para o Sul do Brasil. De um lado está a região metropolitana de Curitiba (PR) e, há poucos quilômetros, a cidade de Joinville (SC), a maior do Estado de Santa Catarina e um dos mais importantes polos industriais do Sul do país. 
                            "
                            unitParagraph4="
                            O Porto de São Francisco do Sul possui terminal graneleiro sendo utilizado, principalmente, como corredor de exportação para cargas a granel. Está situado a 40 km da BR 101, com acesso feito pela BR 280. Além disso, o Porto possui acesso ferroviário pela estrada de ferro 485, que o liga até a cidade de Mafra (SC), onde se conecta a malha ferroviária de cidades como São Paulo (SP), Porto Alegre (RS) e a rede ferroviária que atravessa o Estado do Paraná, considerado um dos grandes corredores de grãos do Brasil. 
                            "
                            unitParagraph5="
                            Já o Porto de Itapoá é especializado em cargas de contêiner, com um dos maiores volumes de movimentação do Brasil, favorecido pelas condições naturais da Baía da Babitonga que permitem a operação de navios de grande porte. O Porto tem ligação direta com a BR 101, através da rodovia SC 416. 
                            "
                            unitParagraph6="
                            Além de dois importantes portos, com vocações distintas para a importação e exportação de produtos a região também está próxima dos aeroportos de Joinville e de Navegantes. 
                            "
                            unitAdress="Av. Osvaldo Reis, 3281 - 18 andar - Ed. Rivieira Business Bairro Bal, Santa Clara, Praia Brava - CEP 88306 773 Itajai/SC"
                            unitMail="contato@grupoativa.net"
                            unitPhone="(47) 2104 6900"
                        />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="4">
                        <Row>
                            <Col sm="12">

                            <Unit
                            unitImg="unidade-foz.png"
                            unitName="Foz do Iguaçu"
                            unitParagraph1="
                            O Grupo Ativa está presente em Foz do Iguaçu (PR), desde 2010. Situada na região do extremo oeste do Estado do Paraná, a cidade possui uma das fronteiras secas mais estratégicas do Brasil. Sua localização geográfica a coloca na fronteira com a Argentina e o Paraguai tornando o município um dos mais movimentados para as atividades de exportação e importação no país.  
                            "
                            unitParagraph2="
                            O Brasil está ligado ao Paraguai pela Ponte Internacional da Amizade, já a ligação com a Argentina é pela Ponte Tancredo Neves. A região de tríplice fronteira é uma das mais importantes ligações do Brasil não só com os países da região do Mercosul, mas também com os portos do Oceano Pacífico. 
                            "
                            unitParagraph3="
                            Pela aduana de Foz do Iguaçu o Brasil recebe produtos como feijão, frutas, farinha de trigo, bebidas, azeitonas, carne suína, peixes e escoa itens como máquinas agrícolas, peças, madeira, minério de aço, automóveis e adubos. 
                            "
                            unitAdress="Av. Osvaldo Reis, 3281 - 18 andar - Ed. Rivieira Business Bairro Bal, Santa Clara, Praia Brava - CEP 88306 773 Itajai/SC"
                            unitMail="contato@grupoativa.net"
                            unitPhone="(47) 2104 6900"
                        />
                            </Col>

                        </Row>
                    </TabPane>
                    <TabPane tabId="5">
                        <Row>
                            <Col sm="12">

                            <Unit
                            unitImg="moldura-foto-unidade_05.png"
                            unitName="São Paulo"
                            unitText="Texto sobre o municipio, apresentando a cidade em alungs aspectos interessantes para a Unidade"
                            unitAdress="Av. Osvaldo Reis, 3281 - 18 andar - Ed. Rivieira Business Bairro Bal, Santa Clara, Praia Brava - CEP 88306 773 Itajai/SC"
                            unitMail="contato@grupoativa.net"
                            unitPhone="(47) 2104 6900"
                        />
                            </Col>

                        </Row>
                    </TabPane>
                </TabContent>
            </section>
        </>
    )
}
export default UnitTabs