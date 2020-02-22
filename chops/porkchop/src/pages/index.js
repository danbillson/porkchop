import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Button from "button"
import Input from "input"
import Pokemon from "../components/pokemon"

const IndexPage = () => {
  const [search, setSearch] = useState("")
  const [pokemon, setPokemon] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    setPokemon(search)
    setSearch("")
  }

  return (
    <Layout>
      <Container>
        <Search onSubmit={handleSubmit}>
          <Input value={search} onChange={e => setSearch(e.target.value)} />
          <Button type="submit">search</Button>
        </Search>
        <Pokemon pokemon={pokemon} />
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

const Search = styled.form`
  margin-bottom: 50px;
`
