import { Button, ButtonText } from '@/components/ui/button'
import { Input, InputField } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import React from 'react'
import Logo from '@/assets/svgs/logo.svg'
import { Heading } from '@/components/ui/heading'
import { Link } from 'expo-router'

export default function AuthScreen() {
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
        <Input size="xl" className="mb-4">
          <InputField />
        </Input>
        <Text size="lg" className=" text-gray-800 font-bold">
          Password
        </Text>
        <Input size="xl" className="mb-4">
          <InputField />
        </Input>
        <Button>
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
