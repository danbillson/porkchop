import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'
import Button from 'button'

const Link = ({ href, children }) => {
  return href.startsWith('/') ? (
    <NextLink href={href}>
      <Anchor as="a">{children}</Anchor>
    </NextLink>
  ) : (
    <Anchor as="a" href={href}>
      {children}
    </Anchor>
  )
}

export default Link

const Anchor = styled(Button)`
  padding: 13px 32px;
`
