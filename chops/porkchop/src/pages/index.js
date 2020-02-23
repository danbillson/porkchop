import React from "react"
import styled from "styled-components"
import { PokemonProvider } from "../contexts"
import Layout from "../components/layout"
import Search from "../components/search"
import Pokemon from "../components/pokemon"
import PokeNav from "../components/pokeNav"

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <PokemonProvider initialState={{}}>
          <Search />
          <Pokemon />
          <PokeNav />
        </PokemonProvider>
      </Container>
    </Layout>
  )
}

export default IndexPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 5%;
  margin: 0 auto;
  width: 90%;
  max-width: 800px;
`
