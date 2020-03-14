import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { selectTodos, addTodo, deleteTodo, toggleTodo } from './todosSlice'

import Checkbox from '../../components/checkbox'
import Close from '../../components/close'

export const Todos = () => {
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const AddTodo = e => {
    e.preventDefault()
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue))
    }
    setInputValue('')
  }

  const renderTodos = () =>
    todos.map(todo => (
      <Todo>
        <Checkbox
          completed={todo.completed}
          onClick={() => dispatch(toggleTodo(todo.id))}
        />
        {todo.text}
        <Close onClick={() => dispatch(deleteTodo(todo.id))} />
      </Todo>
    ))

  return (
    <Modal onSubmit={AddTodo}>
      <Title>
        <Number>{todos.length || 0}</Number>Todos
      </Title>
      {renderTodos()}
      <Input
        placeholder="Get some milk"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <Button type="submit">Add Todo</Button>
    </Modal>
  )
}

const Modal = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  min-width: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const Title = styled.div`
  padding-bottom: 0.5rem;
  font-weight: 700;
`

const Number = styled.span`
  display: inline-flex;
  margin-right: 0.75rem;
  padding: 0.1rem 0.75rem;
  width: fit-content;
  background-color: #75d0c1;
  color: #fff;
  font-weight: 300;
  border-radius: 50px;
`

const Todo = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0;
  max-width: 600px;
  border-bottom: 1px solid #a5b0ae;

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .close {
    display: none;
  }

  :hover {
    .close {
      display: block;
    }
  }
`

const Input = styled.input`
  margin-top: 1rem;
  padding: 0.25rem 1.5rem;
  border-radius: 50px;
  border: 1px solid #a5b0ae;
`

const Button = styled.button`
  margin-top: 0.25rem;
  margin-left: auto;
  padding: 0.25rem 1.5rem;
  background-color: #75d0c1;
  color: #fff;
  width: fit-content;
  font-weight: 700;
  border-radius: 50px;
  border: none;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    background-color: #519187;
  }
`
