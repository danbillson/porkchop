import React from "react"
import styled from "styled-components"
import { useStateValue } from "../contexts"

const Header = ({ siteTitle }) => {
  const [{ theme }, setState] = useStateValue()

  return (
    <Container type={theme}>
      <Nav>
        <Title>{siteTitle}</Title>
        <Shiny
          onClick={() => setState(state => ({ ...state, shiny: !state.shiny }))}
        >
          ✨
        </Shiny>
      </Nav>
    </Container>
  )
}

export default Header

const Container = styled.header`
  background: ${props => props.type};
  margin-bottom: 1.45rem;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Title = styled.h1`
  color: white;
  margin: 0;
`

const Shiny = styled.h1`
  margin: 0;
  cursor: pointer;
`
