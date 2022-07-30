import { Button, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { TodoCard } from '../components/todo/TodoCard'
import { useDispatch, useSelector } from 'react-redux'
import { clearTodos } from '../features/todos/todosSlice'

export const Home = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  const handleClick = () => {
    dispatch(clearTodos())
  }

  return (
    <VStack p={5} gap={5} align="flex-start">
      <Button onClick={handleClick} colorScheme="red">
        Vaciar lista
      </Button>

      {!todos.filter((todo) => !todo.isCompleted).length && (
        <Text>No tienes tarea para completar en este momento</Text>
      )}

      {todos.length && (
        <SimpleGrid columns={{ base: 1, sm: 3, md: 4 }} gap={10}>
          {todos
            .filter((todo) => !todo.isCompleted)
            .map((todo) => (
              <TodoCard key={todo.id} todo={todo} />
            ))}
        </SimpleGrid>
      )}
    </VStack>
  )
}
