import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { Center, Heading } from '@chakra-ui/react'

import { TodoForm } from '../components/todo/TodoForm'
import { editTodo } from '../features/todos/todosSlice'

export const EditPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)
  const navigate = useNavigate()
  const [todo, setTodo] = useState({})

  const onSubmit = (data) => {
    const newData = {
      ...todo,
      ...data,
    }
    dispatch(editTodo(newData))
    navigate('/')
  }

  useEffect(() => {
    const existTodo = todos.find((todo) => todo.id === id)

    if (existTodo) {
      setTodo(existTodo)
    } else {
      navigate('/')
    }
  }, [])

  return (
    <Center w="lg" pt={5} m="auto" flexDirection="column">
      <Heading>Editar Todo</Heading>
      <TodoForm onSubmit={onSubmit} defaultValues={todo} isEditing />
    </Center>
  )
}
