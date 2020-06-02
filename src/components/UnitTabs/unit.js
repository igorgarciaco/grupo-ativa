import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container, Row, Col } from "reactstrap"

import { Icon, InlineIcon } from '@iconify/react';
import mailTwotone from '@iconify/icons-ant-design/mail-twotone';
import phoneTwotone from '@iconify/icons-ant-design/phone-twotone';

const Unit = ({ unitImg, unitName, unitText, unitAdress, unitMail, unitPhone }) => {

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
            <Container>
                <Row>
                    <Col md="5">
                        {TheImageYouWant}
                    </Col>
                    <Col md="7">
                        <div className="unit-description">
                            <h4> <span className="red-text">Unidade</span> {unitName} </h4>
                            <p>{unitText}</p>
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