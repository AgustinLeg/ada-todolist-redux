import React, { useEffect } from 'react'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'

export const TodoForm = ({ onSubmit, isEditing, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues,
  })

  useEffect(() => {
    if (defaultValues) {
      setValue('name', defaultValues.name)
      setValue('message', defaultValues.message)
    }
  }, [defaultValues])

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} gap={10} w="full">
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Nombre</FormLabel>
        <Input
          id="name"
          {...register('name', {
            required: 'Este campo es requerido',
          })}
        />

        {errors.name && (
          <FormErrorMessage>{errors.name.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={errors.message}>
        <FormLabel htmlFor="message">Mensaje</FormLabel>
        <Textarea
          height={40}
          id="message"
          {...register('message', {
            required: 'Este campo es requerido',
          })}
        />

        {errors.message && (
          <FormErrorMessage>{errors.message.message}</FormErrorMessage>
        )}
      </FormControl>
      <Button type="submit" colorScheme={isEditing ? 'green' : 'blue'} w="full">
        {isEditing ? 'Editar' : 'Agregar Todo'}
      </Button>
    </VStack>
  )
}
