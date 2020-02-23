import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '.'

storiesOf('Button', module).add('default', () => <Button>{'Button'}</Button>)
storiesOf('Button', module).add('themed', () => (
  <Button theme={{ primary: '#fb8583' }}>{'Button'}</Button>
))
