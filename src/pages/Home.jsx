import { Button, Flex, Text, VStack } from '@chakra-ui/react'
import { TodoCard } from '../components/todo/TodoCard'
import { useDispatch, useSelector } from 'react-redux'
import { clearTodos } from '../features/todos/todosSlice'

export const Home = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const handleClear = () => {
    dispatch(clearTodos())
  }

  return (
    <VStack p={5} gap={5} align="flex-start">
      <Button colorScheme="red" variant="outline" onClick={handleClear}>
        Vaciar todos
      </Button>

      {!todos.filter((todo) => !todo.isCompleted).length && (
        <Text>No hay todos para completar.</Text>
      )}

      {todos.length && (
        <Flex wrap="wrap" gap={10} justify="center">
          {todos
            .filter((todo) => !todo.isCompleted)
            .map((todo) => (
              <TodoCard key={todo.id} todo={todo} />
            ))}
        </Flex>
      )}
    </VStack>
  )
}
