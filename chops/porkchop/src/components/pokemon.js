import React from "react"
import styled from "styled-components"
import { getPokemon } from "pokemon"
import useSwr from "swr"

const Pokemon = ({ pokemon }) => {
  const { data, error } = useSwr(pokemon, getPokemon)

  if (error) {
    return <div>The pokemon {pokemon} was not found</div>
  }

  if (!data) {
    return null
  }

  const {
    data: { name, sprites },
  } = data

  return (
    <Container>
      <h2>{name}</h2>
      <img src={sprites?.front_default} alt={name} />
    </Container>
  )
}

export default Pokemon

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
