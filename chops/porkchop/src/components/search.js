import React, { useState } from "react"
import styled from "styled-components"
import useSwr from "swr"
import { useLocation } from "@reach/router"
import Button from "button"
import Input from "input"
import { getPokemon } from "pokemon"
import { useStateValue, usePokemonValue } from "../contexts"
import { useEffect } from "react"

const Search = () => {
  const [, setPokemon] = usePokemonValue()
  const [{ pokemon }, setState] = useStateValue("")
  const [search, setSearch] = useState("")
  const location = useLocation()
  const { data, error } = useSwr(
    pokemon && pokemon.toString().toLowerCase(),
    getPokemon
  )

  useEffect(() => {
    const path = location.pathname.slice(1)
    path &&
      setState(state => ({ ...state, pokemon: path.toString().toLowerCase() }))
  }, [location.pathname, setState])

  useEffect(() => {
    setPokemon({ pokemon: data?.data, error })
  }, [pokemon, data, error, setPokemon])

  const handleSubmit = e => {
    e.preventDefault()
    setState(state => ({ ...state, pokemon: search }))
    setSearch("")
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input value={search} onChange={e => setSearch(e.target.value)} />
      <Button type="submit">search</Button>
    </Form>
  )
}

export default Search

const Form = styled.form`
  margin-bottom: 50px;

  button {
    transition: 0.3s ease-in-out;
  }
`
