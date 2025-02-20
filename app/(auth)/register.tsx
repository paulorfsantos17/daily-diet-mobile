import { Button, ButtonText } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Input, InputField } from '@/components/ui/input'

import { VStack } from '@/components/ui/vstack'
import { Link } from 'expo-router'
import React from 'react'
import Logo from '@/assets/svgs/logo.svg'
import { Text } from '@/components/ui/text'
import { Box } from '@/components/ui/box'

export default function RegisterScreen() {
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
        <Input size="xl" className="mb-4">
          <InputField />
        </Input>
        <Text size="lg" className=" text-gray-800 font-bold">
          E-mail:
        </Text>
        <Input size="xl" className="mb-4">
          <InputField />
        </Input>
        <Text size="lg" className=" text-gray-800 font-bold">
          Senha:
        </Text>
        <Input size="xl" className="mb-4">
          <InputField />
        </Input>
        <Text size="lg" className=" text-gray-800 font-bold">
          Confirme sua senha:
        </Text>
        <Input size="xl" className="mb-4">
          <InputField />
        </Input>
        <Button>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </VStack>

      <Box className="gap-2">
        <Text>Ja possui uma conta?</Text>
        <Link href="/(home)" asChild>
          <Text className="font-bold"> Acesse sua conta</Text>
        </Link>
      </Box>
    </VStack>
  )
}
