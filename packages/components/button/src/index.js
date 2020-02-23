import styled from 'styled-components'
import color from 'color'
import { spacing } from 'theme'

const colorOrGradient = gradient =>
  gradient.includes('gradient')
    ? gradient.substring(gradient.lastIndexOf('#'), gradient.lastIndexOf(')'))
    : gradient

const Button = styled.button`
  background: ${props =>
    props.disabled
      ? '#ccc'
      : props.gradient
      ? props.theme.primary
      : colorOrGradient(props.theme.primary) || '#ccc'};
  color: #fff;
  padding: 9px ${spacing.extraLarge};
  border: none;
  border-bottom: 3px solid
    ${props =>
      color(
        props.disabled ? '#ccc' : colorOrGradient(props.theme.primary) || '#ccc'
      )
        .darken(0.35)
        .hex()};
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 300;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  -webkit-appearance: none;
  -moz-appearance: none;
`

export default Button
