import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProfileCard from "../components/profilecard"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const allProfileData = data.allAirtable.edges
  const placeholderData = data.placeholder

  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value
    const allProfiles = data.allAirtable.edges || []
    const filteredData = allProfiles.filter(profile => {
      const { jobRole, name } = profile.node.data
      return (
        jobRole.toLowerCase().includes(query.toLowerCase()) ||
        name.toLowerCase().includes(query.toLowerCase())
        // || (tags && tags.join("").toLowerCase().includes(query.toLowerCase()))
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const allProfiles = hasSearchResults ? filteredData : allProfileData

  return (
    <Layout>
      <SEO title="Home" />
      <article>
        {/* <Image fluid={cardImage} className="cardImage" alt={profile.name} /> */}
        <div className="controls">
          <p className="search">Search</p>
          <input
            type="text"
            aria-label="Search"
            placeholder="Type to filter posts..."
            onChange={handleInputChange}
          />
        </div>
      </article>
      {allProfiles.map(({ node }) => {
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
    placeholder: file(relativePath: { eq: "default-mugshot.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
