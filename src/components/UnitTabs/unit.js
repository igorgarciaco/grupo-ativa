import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container, Row, Col } from "reactstrap"

import { Icon, InlineIcon } from '@iconify/react';
import mailTwotone from '@iconify/icons-ant-design/mail-twotone';
import phoneTwotone from '@iconify/icons-ant-design/phone-twotone';

const Unit = ({ unitImg, unitName, unitAdress, unitMail, unitPhone, 
  unitParagraph1, unitParagraph2, unitParagraph3, unitParagraph4, unitParagraph5, unitParagraph6 }) => {

    const data = useStaticQuery(
        graphql`
          query {
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth:1000) {
                    ...GatsbyImageSharpFluid_tracedSVG
                    originalName
                  }
                }
              }
            }
          }`,
    );

    const TheImageYouWant = data.allImageSharp.edges
        .filter(edge => edge.node.fluid.originalName === unitImg)
        .map(myImage => <Img fluid={myImage.node.fluid} />);

    return (
        <>
            <Container className="unit-container">
              <Row>
                <Col md="5"></Col>
                <Col md="7">
                <h4> <span className="red-text">Unidade</span> {unitName} </h4>

                </Col>
              </Row>
                <Row>
                    <Col md="5">
                      <div className="unit-frame">
                        {TheImageYouWant}
                      </div>
                    </Col>
                    <Col md="7">
                        <div className="unit-description">
                            <p>{unitParagraph1}</p>
                            <p>{unitParagraph2}</p>
                            <p>{unitParagraph3}</p>
                            <p>{unitParagraph4}</p>
                            <p>{unitParagraph5}</p>
                            <p>{unitParagraph6}</p>
                            <p>Localização</p>
                            <p>{unitAdress}</p>
                            <p><Icon icon={mailTwotone} color="#B62528" /> {unitMail} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon icon={phoneTwotone} color="#B62528" /> {unitPhone}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Unit