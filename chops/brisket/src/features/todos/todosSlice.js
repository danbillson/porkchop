import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 3, text: 'Get milk', completed: false },
    { id: 4, text: 'Get more milk', completed: true }
  ],
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { id, text } = action.payload
        state.push({ id, text, completed: false })
      },
      prepare(text) {
        return { payload: { id: nextTodoId++, text } }
      }
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload)
      state.splice(index, 1)
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

export const selectTodos = state => state.todos

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions

export default todosSlice.reducer
