import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Unit from "./unit.js"

import "./style.css"

export default () => (
    <>
        <section className="unit-tabs" id="units">
            <Tabs defaultIndex="1">
                <TabList>
                    <Tab>
                        DIONÍSIO CERQUEIRA
                            /SC
                        </Tab>
                    <Tab>
                        ITAJAI
                            /SC
                        </Tab>
                    <Tab>
                        são francisco do sul
                            /sc
                        </Tab>
                    <Tab>
                        foz do iguaçu
                            /pr
                        </Tab>
                    <Tab>
                        são paulo
                            /sp
                        </Tab>
                </TabList>

                <TabPanel>
                    <Unit
                        unitImg="unidade-dionisio.jpg"
                        unitName="Dionísio Cerqueira"
                        unitParagraph1="
                        O Grupo Ativa nasceu em Dionísio Cerqueira (SC), em 1995, cidade estratégica para os negócios que envolvem o comércio exterior e a logística nos países da América do Sul, pois se trata da única fronteira seca de Santa Catarina, rota importante para as mercadorias que transitam entre os países vizinhos. Pela aduana de Dionísio Cerqueira flui a produção agrícola do Mercosul, assim como carnes, bobinas de papel e plástico, bebidas, vestuário e diversos tipos de alimentos, peças e maquinários. 
                             "
                        unitParagraph2="
                        A cidade de Dionísio Cerqueira está localizada na região do Extremo-Oeste do Estado, onde faz fronteira com a Argentina. A cidade de Bernardo de Irigoyen, no Estado de Missiones, está separada do município apenas pelo Rio Peperi Guaçu. Além disso, o município também faz divisa com o Estado do Paraná, pela cidade de Barracão e, está localizado a apenas 350 quilômetros da fronteira com o Paraguai. 
                            "
                        unitAdress="Av. Osvaldo Reis, 3281 - 18 andar - Ed. Rivieira Business Bairro Bal, Santa Clara, Praia Brava - CEP 88306 773 Itajai/SC"
                        unitMail="contato@grupoativa.net"
                        unitPhone="(47) 2104 6900"
                    />
                </TabPanel>
                <TabPanel>
                    <Unit
                        unitImg="moldura-foto-unidade_05.png"
                        unitName="Itajaí"
                        unitParagraph1="
                        Estamos em Itajaí (SC) desde 2004. A localização é estratégica para o nosso negócio, pois no Complexo Portuário de Itajaí estão localizados os Terminais Portuários APM Terminals e Portonave. Considerado o principal canal de escoamento, para produtos fabricados no Brasil e na América do Sul, estes portos recebem cargas marítimas vindas de todos os continentes e com destino também aos países vizinhos. 
                            "
                        unitParagraph2="
                        O Complexo movimenta cargas conteinerizadas, tais como produtos eletrônicos e mecânicos, papel e derivados, plásticos e borrachas, cerâmicas e vidros, agroindústria e alimentos em geral, veículos, produtos químicos, têxteis, madeiras e derivados.
                            "
                        unitParagraph3="
                        A região da Foz do Rio Itajaí-Açu também conta com terminais portuários equipados para movimentar cargas secas e refrigeradas, com terminais retroportuários alfandegados, armazéns e mão de obra especializada para atender às demandas específicas da logística e do comércio exterior.
                            "
                        unitParagraph4="
                        A localização privilegiada, no centro da região Sul do país, aliada a infraestrutura de serviços adequada, tornam a região de Itajaí (SC) uma grande concentradora e distribuidora de cargas, permitindo atender importantes mercados de exportação e importação, que são a nossa especialidade.
                            "
                        unitAdress="Av. Osvaldo Reis, 3281 - 18 andar - Ed. Rivieira Business Bairro Bal, Santa Clara, Praia Brava - CEP 88306 773 Itajai/SC"
                        unitMail="contato@grupoativa.net"
                        unitPhone="(47) 2104 6900"
                    />
                </TabPanel>
                <TabPanel>
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
                </TabPanel>
                <TabPanel>
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
                </TabPanel>
                <TabPanel>
                    <Unit
                        unitImg="moldura-foto-unidade_05.png"
                        unitName="São Paulo"
                        unitText="Texto sobre o municipio, apresentando a cidade em alungs aspectos interessantes para a Unidade"
                        unitAdress="Av. Osvaldo Reis, 3281 - 18 andar - Ed. Rivieira Business Bairro Bal, Santa Clara, Praia Brava - CEP 88306 773 Itajai/SC"
                        unitMail="contato@grupoativa.net"
                        unitPhone="(47) 2104 6900"
                    />
                </TabPanel>
            </Tabs>
        </section>
    </>
);
