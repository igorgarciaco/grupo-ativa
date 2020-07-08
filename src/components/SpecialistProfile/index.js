import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Icon, InlineIcon } from '@iconify/react';
import mailFilled from '@iconify/icons-ant-design/mail-filled';
import whatsappIcon from '@iconify/icons-whh/whatsapp';


import "./style.css"

const SpecialistProfile = ({ specPhoto, specName, specMail, specNumber }) => {
    const data = useStaticQuery(
        graphql`
              query specialistAvatars{
                allImageSharp {
                  edges {
                    node {
                      fixed(width:150) {
                        ...GatsbyImageSharpFixed_tracedSVG
                        originalName
                      }
                    }
                  }
                }
              }`,
    );

    const TheImageYouWant = data.allImageSharp.edges
        .filter(edge => edge.node.fixed.originalName === specPhoto)
        .map(myImage => <Img fixed={myImage.node.fixed} />);

    return (
        <>
            <div className="specialist-card">
                <div className="avatar-thumb">
                    {TheImageYouWant}
                </div>
            </div>
            <div className="specialist-name">
                <p>{specName}</p>
            </div>
            <div className="specialist-info">
                <p>
                    <span>
                        <span className="specialist-icon"><Icon icon={mailFilled} /> </span>{specMail} &nbsp; &nbsp;
                    </span>
                    <span>
                        <span className="specialist-icon"><Icon icon={whatsappIcon} /></span> {specNumber}
                    </span>
                </p>
            </div>
        </>
    )
}

export default SpecialistProfile