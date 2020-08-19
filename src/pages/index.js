import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProfileCard from "../components/profilecard"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const allProfileData = data.allAirtable.edges
  const placeholderData = data.placeholder
  return (
    <Layout>
      <SEO title="Home" />
      {allProfileData.map(({ node }) => {
        return (
          <ProfileCard
            key={node.id}
            profile={node.data}
            placeholder={placeholderData}
          />
        )
      })}
    </Layout>
  )
}

// Grabs latest posts for home page and image for JumboTron. Change query below to change number of posts returned.
export const data = graphql`
  query {
    allAirtable {
      edges {
        node {
          data {
            awesomeAt
            jobRole
            name
            twitterUsername
            randomFact
            picture {
              localFiles {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          id
        }
      }
    }
    placeholder: file(relativePath: { eq: "default-mugshot.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
