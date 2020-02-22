import axios from 'axios'

export const baseURL = `https://pokeapi.co/api/v2/`

export const pokeapi = axios.create({ baseURL })

export const getPokemon = pokemon => pokeapi.get(`/pokemon/${pokemon}`)
