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
