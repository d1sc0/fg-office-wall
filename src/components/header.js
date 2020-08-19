import React from "react"
import PropTypes from "prop-types"
import Search from "./search"
// import { Link } from "gatsby"
import Logo from "../components/logo"

const Header = ({ siteTitle, profiles }) => {
  return (
    <header>
      <div className="title">
        <Logo siteT={siteTitle} />
      </div>
      <div className="search">
        <Search profiles={profiles} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
