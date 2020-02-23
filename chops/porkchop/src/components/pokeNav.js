import React from "react"
import styled from "styled-components"
import Button from "button"
import { useStateValue, usePokemonValue } from "../contexts"

const PokeNav = () => {
  const [, setState] = useStateValue()
  const [{ pokemon }] = usePokemonValue()

  if (!pokemon) {
    return null
  }

  return (
    <Container>
      <Button
        disabled={pokemon.id <= 1}
        onClick={() =>
          setState(state => ({ ...state, pokemon: pokemon.id - 1 }))
        }
      >
        prev
      </Button>
      <Button
        disabled={pokemon.id >= 802}
        onClick={() =>
          setState(state => ({ ...state, pokemon: pokemon.id + 1 }))
        }
      >
        next
      </Button>
    </Container>
  )
}

export default PokeNav

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
