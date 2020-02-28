import React from 'react'
import styled from 'styled-components'
import Input from 'input'
import Layout from '../components/layout'
import Modal from '../components/modal'

const You = () => {
  return (
    <Layout>
      <Modal>
        <h2>Let's get to know eachother</h2>
        <InputWrapper>
          <label for="name">Hi, I'm Dan, what's your name?</label>
          <Input name="name" />
        </InputWrapper>
      </Modal>
    </Layout>
  )
}

export default You

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: #777;
    padding-bottom: 12px;
  }
`
