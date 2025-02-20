import { Button, ButtonText } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Input, InputField } from '@/components/ui/input'

import { VStack } from '@/components/ui/vstack'
import { Link, useRouter } from 'expo-router'
import React from 'react'
import Logo from '@/assets/svgs/logo.svg'
import { Text } from '@/components/ui/text'
import { Box } from '@/components/ui/box'

import { zodResolver } from '@hookform/resolvers/zod'

import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { registerUser } from '@/http/register-user'

const registerFormSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
    password_confirmation: z.string().min(8),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'As Senhas Não coincidem',
    path: ['password_confirmation'],
  })

type IRegisterForm = z.infer<typeof registerFormSchema>

export default function RegisterScreen() {
  const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: zodResolver(registerFormSchema),
  })

  async function handleRegister(data: IRegisterForm) {
    try {
      await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
      })

      router.push({
        pathname: '/',
        params: {
          email: data.email,
          password: data.password,
        },
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <VStack className="flex-1 bg-gray-200 gap-8 justify-center p-8 items-center">
      <Logo />
      <Heading size="2xl" className="text-gray-800 font-bold">
        Cadastre-se
      </Heading>

      <VStack className="w-full">
        <Text size="lg" className=" text-gray-800 font-bold">
          Name
        </Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { value, onChange, onBlur } }) => (
            <Input size="xl" className="mb-4">
              <InputField
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            </Input>
          )}
        />
        {errors.name && (
          <Text className="text-red-500">{errors.name?.message}</Text>
        )}

        <Text size="lg" className=" text-gray-800 font-bold">
          E-mail:
        </Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange, onBlur } }) => (
            <Input size="xl" className="mb-4">
              <InputField
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            </Input>
          )}
        />
        {errors.email && (
          <Text className="text-red-500">{errors.email.message}</Text>
        )}

        <Text size="lg" className=" text-gray-800 font-bold">
          Senha:
        </Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange, onBlur } }) => (
            <Input size="xl" className="mb-4">
              <InputField
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                type="password"
              />
            </Input>
          )}
        />
        {errors.password && (
          <Text className="text-red-500">{errors.password.message}</Text>
        )}

        <Text size="lg" className=" text-gray-800 font-bold">
          Confirme sua senha:
        </Text>
        <Controller
          control={control}
          name="password_confirmation"
          render={({ field: { value, onChange, onBlur } }) => (
            <Input size="xl" className="mb-4">
              <InputField
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                type="password"
              />
            </Input>
          )}
        />
        {errors.password_confirmation && (
          <Text className="text-red-500">
            {errors.password_confirmation.message}
          </Text>
        )}
        <Button onPress={handleSubmit(handleRegister)}>
          <ButtonText>Cadastrar</ButtonText>
        </Button>
      </VStack>

      <Box className="gap-2">
        <Text>Ja possui uma conta?</Text>
        <Link href="/" asChild>
          <Text className="font-bold"> Acesse sua conta</Text>
        </Link>
      </Box>
    </VStack>
  )
}
