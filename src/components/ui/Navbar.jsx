import { Link as RouterLink } from 'react-router-dom'
import { Heading, HStack, Link } from '@chakra-ui/react'
import { TodoDrawer } from '../todo/TodoDrawer'

export const links = [
  {
    ref: '/',
    name: 'Home',
  },
  {
    ref: '/add-todo',
    name: 'Agregar Todo',
  },
]

export const Navbar = () => {
  return (
    <HStack
      as="nav"
      justify="space-between"
      padding={5}
      bg="blue.200"
      color="white"
    >
      <Heading size="md">Todo list</Heading>
      <HStack gap={5}>
        {links.map((item) => (
          <Link as={RouterLink} to={item.ref} key={`nav-item-${item.ref}`}>
            {item.name}
          </Link>
        ))}
      </HStack>
      <TodoDrawer />
    </HStack>
  )
}
