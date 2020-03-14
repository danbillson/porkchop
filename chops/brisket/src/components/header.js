/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import styled from 'styled-components'

const Header = ({ siteTitle }) => {
  return (
    <Container>
      <Nav>
        <Title>{siteTitle}</Title>
        <Cow role="img" aria-label="cow" onClick={() => console.log('Moo')}>
          🐮
        </Cow>
      </Nav>
    </Container>
  )
}

export default Header

const Container = styled.header`
  background: #75d0c1;
  margin-bottom: 1.45rem;
  transition: 0.3s ease-in-out;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Title = styled.h1`
  color: white;
  margin: 0;
`

const Cow = styled.span`
  margin: 0;
  cursor: pointer;
  font-size: 36px;
`
