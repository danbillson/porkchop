import React, { useState, useContext, createContext } from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"

export const stateContext = createContext()

export const StateProvider = ({ initialState, children }) => (
  <stateContext.Provider value={useState(initialState)}>
    {children}
  </stateContext.Provider>
)

export const useStateValue = () => useContext(stateContext)

export const ThemeProvider = ({ children }) => {
  const [{ theme }] = useStateValue()
  return (
    <StyledThemeProvider theme={{ primary: theme }}>
      {children}
    </StyledThemeProvider>
  )
}

export const pokemonContext = createContext()

export const PokemonProvider = ({ initialState, children }) => (
  <pokemonContext.Provider value={useState(initialState)}>
    {children}
  </pokemonContext.Provider>
)

export const usePokemonValue = () => useContext(pokemonContext)
