import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = [
  {
    id: uuidv4(),
    name: 'Ejemplo',
    message: 'Esto es un mensaje desde redux state',
    isCompleted: true,
  },
  {
    id: uuidv4(),
    name: 'Ejemplo 2',
    message: 'Esto es un mensaje desde redux state 2',
    isCompleted: false,
  },
]

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => [
      ...state,
      { ...action.payload, id: uuidv4(), isCompleted: false },
    ],
    clearTodos: () => [],
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload)
    },
    editTodo: (state, action) => {
      // state === 'todos' []
      // action {type: '', payload: {id, name, message}}
      const newTodos = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload
        }
        return todo
      })
      return newTodos
    },
    toggleTodoComplete: (state, action) => {
      const newTodos = state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          }
        }
        return todo
      })
      return newTodos
    },
  },
})

export const { addTodo, clearTodos, removeTodo, editTodo, toggleTodoComplete } =
  todoSlice.actions

export default todoSlice.reducer
