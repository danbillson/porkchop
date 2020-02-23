import React, { useEffect } from "react"
import styled from "styled-components"
import useSwr from "swr"
import { getPokemon } from "pokemon"
import { useStateValue, usePokemonValue } from "../contexts"
import { typeThemes } from "../util"

const Pokemon = () => {
  const [{ shiny }, setState] = useStateValue()
  const [{ pokemon, error }] = usePokemonValue()

  // prefetch pokemon before and after current
  useSwr(pokemon && pokemon.id - 1, getPokemon)
  useSwr(pokemon && pokemon.id + 1, getPokemon)

  const types = pokemon?.types
  const color = !types
    ? null
    : types.length > 1
    ? `linear-gradient(to left, ${typeThemes[types[0].type.name]}, ${
        typeThemes[types[1].type.name]
      })`
    : typeThemes[types[0].type.name]

  useEffect(() => {
    setState(state => ({
      ...state,
      theme: color ? color : typeThemes.normal,
    }))
  }, [color, setState])

  if (error) {
    return <div>The pokemon {pokemon} was not found</div>
  }

  if (!pokemon) {
    return null
  }

  const { name, sprites } = pokemon

  return (
    <Container>
      <h2>{name}</h2>
      <img
        src={shiny ? sprites.front_shiny : sprites.front_default}
        alt={name}
      />
    </Container>
  )
}

export default Pokemon

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 185px;
`
