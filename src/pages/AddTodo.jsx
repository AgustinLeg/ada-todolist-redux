import { Center, Heading } from '@chakra-ui/react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TodoForm } from '../components/todo/TodoForm'

import { addTodo } from '../features/todos/todosSlice'

export const AddTodo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    dispatch(addTodo(data))
    navigate('/', {
      replace: true,
    })
  }

  return (
    <Center w="lg" pt={5} m="auto" flexDirection="column">
      <Heading>Nuevo Todo</Heading>
      <TodoForm onSubmit={onSubmit} />
    </Center>
  )
}
