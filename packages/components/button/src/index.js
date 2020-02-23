import styled from 'styled-components'
import color from 'color'
import { spacing } from 'theme'

const Button = styled.button`
  background: ${props => props.theme.primary || 'orange'};
  color: #fff;
  padding: 9px ${spacing.extraLarge};
  border: none;
  border-bottom: 3px solid
    ${props =>
      color(props.theme.primary || 'orange')
        .darken(0.35)
        .hex()};
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
`

export default Button
