import React from 'react'
import styled from 'styled-components'

const ChoppingBoard = () => {
  return (
    <Board>
      <Point />
      <h4>Want to see more of the meaty range?</h4>
      <Body>
        Check out <a href="https://danielbillson.com">Porkchop 🐷</a>
      </Body>
    </Board>
  )
}

export default ChoppingBoard

const Board = styled.div`
  position: absolute;
  right: 20px;
  top: 70px;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const Point = styled.span`
  position: absolute;
  top: -5px;
  right: 7px;
  width: 20px;
  height: 20px;
  background-color: #fff;
  transform: rotate(45deg);
`

const Body = styled.p`
  font-size: 0.8rem;
  margin: 0;

  a {
    color: inherit;
  }
`
