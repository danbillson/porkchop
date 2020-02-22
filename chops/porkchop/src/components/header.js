import React from "react"
import { Link } from "gatsby"
import { useStateValue } from "../contexts"

const Header = ({ siteTitle }) => {
  const [{ theme }] = useStateValue()

  return (
    <header
      style={{
        background: theme,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
