/* eslint-disable camelcase */
import { Button, ButtonText } from '@/components/ui/button'
import { Input, InputField } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import React, { useEffect } from 'react'
import Logo from '@/assets/svgs/logo.svg'
import { Heading } from '@/components/ui/heading'
import { Link, useLocalSearchParams, useRouter } from 'expo-router'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { authUser } from '@/http/auth-user'
import {
  storageAuthTokenGet,
  storageAuthTokenSave,
} from '@/storage/storageAuthToken'

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
})

interface ILoginForm extends z.infer<typeof loginFormSchema> {}

export default function AuthScreen() {
  const router = useRouter()

  const { email, password } = useLocalSearchParams<{
    email: string
    password: string
  }>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: email || '',
      password: password || '',
    },
  })

  async function onLoginSubmit(data: ILoginForm) {
    try {
      const response = await authUser(data)
      const { access_token } = response

      storageAuthTokenSave({ token: access_token })
      router.push('/(private)/home')
    } catch (error) {
      console.error(error)
    }
  }

  async function loadUser() {
    const token = await storageAuthTokenGet()
    if (token) router.push('/(private)/home')
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <VStack className="flex-1 bg-gray-200 gap-8 justify-center p-8 items-center">
      <Logo />
      <Heading size="2xl" className="text-gray-800 font-bold">
        Login
      </Heading>

      <VStack className="w-full">
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
          <Text className="text-red-500">{errors.email?.message}</Text>
        )}

        <Text size="lg" className=" text-gray-800 font-bold">
          Password
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
          <Text className="text-red-500">{errors.password?.message}</Text>
        )}
        <Button onPress={handleSubmit(onLoginSubmit)}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </VStack>

      <Text>
        Ainda não possui uma conta?
        <Link href="/register" asChild>
          <Text className="font-bold"> Cadastre-se</Text>
        </Link>
      </Text>
    </VStack>
  )
}
