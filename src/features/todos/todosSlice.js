import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = [
  {
    id: uuidv4(),
    name: 'Ejemplo',
    message: 'Esto es un mensaje desde redux state',
    isCompleted: false,
  },
  {
    id: uuidv4(),
    name: 'Ejemplo 2',
    message: 'Esto es un mensaje desde redux state 2',
    isCompleted: true,
  },
]

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // state: todos = []
    // action : {type: automatico , payload:}
    addTodo: (state, action) => [...state, { ...action.payload, id: uuidv4() }],

    // payload = id del todo
    removeTodo: (state, action) => {
      const newList = state.filter((todo) => todo.id !== action.payload)

      return newList
    },

    // no es necesario pasarle un action { payload }
    clearTodos: () => {
      return []
    },

    // payload = nueva data modificada {name: nuevo, message: nuevo, id: mismo}
    editTodo: (state, action) => {
      const { name, message, id } = action.payload
      // Version Redux ToolKit
      const todo = state.find((todo) => todo.id === id)

      if (todo) {
        todo.name = name
        todo.message = message
      }

      // Version en clase

      // const newList = state.map((todo) => {
      //   if (todo.id === id) {
      //     return {
      //       ...todo,
      //       name,
      //       message,
      //     }
      //   }
      //   return todo
      // })

      // return newList
    },

    // payload = id
    toggleCompleteTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload)

      if (todo) {
        todo.isCompleted = !todo.isCompleted
      }
    },
  },
})

export const { addTodo, removeTodo, clearTodos, editTodo, toggleCompleteTodo } =
  todoSlice.actions

export default todoSlice.reducer
