import { Button, ButtonGroup, Heading, Text, VStack } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeTodo, toggleTodoComplete } from '../../features/todos/todosSlice'

export const TodoCard = ({ todo }) => {
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeTodo(todo.id))
  }

  const toggleComplete = () => {
    dispatch(toggleTodoComplete(todo.id))
  }

  return (
    <VStack align="flex-start" bg="gray.100" rounded="lg" p={4}>
      <Heading size="md">{todo.name}</Heading>
      <Text>{todo.message}</Text>
      <ButtonGroup size="xs">
        <Button as={Link} to={`edit-todo/${todo.id}`} colorScheme="green">
          Editar
        </Button>
        <Button colorScheme="blue" onClick={toggleComplete}>
          Completar
        </Button>
        <Button colorScheme="red" onClick={handleRemove}>
          Eliminar
        </Button>
      </ButtonGroup>
    </VStack>
  )
}
