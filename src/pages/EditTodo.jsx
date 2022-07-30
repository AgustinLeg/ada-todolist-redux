import { Center } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import { TodoForm } from '../components/todo/TodoForm'
import { editTodo } from '../features/todos/todosSlice'

export const EditTodo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const todos = useSelector((state) => state.todos)
  const { id } = useParams()
  const [todo, setTodo] = useState(null)

  const onSubmit = (data) => {
    dispatch(editTodo({ ...data, id }))
    navigate('/')
  }

  useEffect(() => {
    const existTodo = todos.find((todo) => todo.id === id)

    if (!existTodo) {
      navigate('/')
    } else {
      setTodo(existTodo)
    }
  }, [id])

  return (
    <Center w="lg" pt={5} m="auto">
      <TodoForm onSubmit={onSubmit} defaultValues={todo} isEditing />
    </Center>
  )
}
