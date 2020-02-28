import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Header = () => {
  return (
    <Container>
      <Nav>
        <Link href="/">
          <Title>Ribeye</Title>
        </Link>
        <Meat
          role="img"
          aria-label="meat"
          onClick={() => console.log(`I hope you have a meaty day 🥓🍖🍗🥩`)}
        >
          🥩
        </Meat>
      </Nav>
    </Container>
  )
}

export default Header

const Container = styled.header`
  background: black;
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
  cursor: pointer;
`

const Meat = styled.span`
  margin: 0;
  font-size: 36px;
  cursor: pointer;
`
