import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { TodoCard } from './TodoCard'

const TodoDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const todos = useSelector((state) => state.todos)

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Completados
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Todos completados</DrawerHeader>
          <DrawerBody>
            <VStack>
              {todos
                .filter((todo) => todo.isCompleted)
                .map((todo) => (
                  <TodoCard key={todo.id} todo={todo} />
                ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export { TodoDrawer }
