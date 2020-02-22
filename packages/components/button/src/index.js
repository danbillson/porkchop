import styled from 'styled-components'
import { spacing } from 'theme'

const Button = styled.button`
  background: ${props => props.theme.primary || 'orange'};
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 300;
  padding: 9px ${spacing.extraLarge};
`

export default Button
