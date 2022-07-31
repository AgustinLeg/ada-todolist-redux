import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { TodoCard } from './TodoCard'

export const TodoDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const todos = useSelector((state) => state.todos)

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Todos completados
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Todos completados</DrawerHeader>

          <DrawerBody>
            <VStack gap={5}>
              {todos
                .filter((todo) => todo.isCompleted)
                .map((todo) => (
                  <TodoCard key={`todo-completed-${todo.id}`} todo={todo} />
                ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
