import Typography from 'typography'
import { createGlobalStyle } from 'styled-components'

export const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Karla',
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  bodyFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ]
})

export const GlobalTypography = createGlobalStyle`${typography.toString()}`

export const spacing = {
  extraLarge: '32px',
  large: '24px',
  medium: '16px',
  small: '8px',
  extraSmall: '4px'
}
