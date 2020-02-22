import React, { useEffect } from "react"
import styled from "styled-components"
import useSwr from "swr"
import { getPokemon } from "pokemon"
import { useStateValue } from "../contexts"
import { typeThemes } from "../util"

const Pokemon = ({ pokemon }) => {
  const [, setState] = useStateValue()
  const { data, error } = useSwr(pokemon && pokemon.toLowerCase(), getPokemon)

  const type = data?.data?.types[0]?.type?.name

  useEffect(() => {
    setState({
      theme: type ? typeThemes[type] : typeThemes.normal,
    })
  }, [type, setState])

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
      <img src={sprites.front_default} alt={name} />
    </Container>
  )
}

export default Pokemon

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
