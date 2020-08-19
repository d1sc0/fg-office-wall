import React from "react"
// import Image from "gatsby-image"
// import { object } from "prop-types"

const Search = ({ profiles }) => {
  console.log(profiles)
  return (
    <>
      {/* search input */}
      <input
        type="text"
        aria-label="Search"
        placeholder="Type to filter posts..."
        // onChange={handleInputChange}
      />
      {/* search input */}
    </>
  )
}

export default Search
