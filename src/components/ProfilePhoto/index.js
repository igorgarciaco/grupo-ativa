import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./style.css"


const ProfilePhoto = ({ profilePhoto }) => {
  const data = useStaticQuery(
    graphql`
          query allTheImagesQuery{
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
    .filter(edge => edge.node.fluid.originalName === profilePhoto)
    .map(myImage => <Img fluid={myImage.node.fluid} />);

  return (
    <>
    <div className="profile-photo-background">
    </div>
    <div className="profile-photo">
      {TheImageYouWant}
    </div>
    </>
  )
}

export default ProfilePhoto