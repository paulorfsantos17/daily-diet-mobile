import { AlertContent, AlertText } from '@/components/alert'
import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { colors } from '@/theme/colors'
import { Link } from 'expo-router'
import { ArrowLeft } from 'phosphor-react-native'
import { View } from 'react-native'

export default function Meal() {
  return (
    <>
      <AlertContent>
        <AlertText message="Deseja realmente excluir o registro da refeição?" />
        <Box className="flex-row   gap-4 justify-center">
          <Button variant="outline" className="w-1/2">
            <ButtonText>Cancelar</ButtonText>
          </Button>
          <Button className="w-1/2">
            <ButtonText>Sim, excluir</ButtonText>
          </Button>
        </Box>
      </AlertContent>
      <VStack className="flex-1 bg-green-light gap-8">
        <HStack className="mt-20 mx-6">
          <Link href="/">
            <ArrowLeft size={24} color={colors.gray[800]} />
          </Link>
          <Heading className="text-lg  flex-1 text-center">Refeição</Heading>
        </HStack>

        <VStack className="flex-1 gap-8 bg-gray-100 rounded-t-[20px] px-6 pt-8 pb-8">
          <Box className="gap-2">
            <Heading>Sanduíche</Heading>
            <Text className="text-gray-800">
              Sanduíche de pão integral com atum e salada de alface e tomate
            </Text>
          </Box>

          <Box className="gap-2">
            <Heading size="xs">Data e hora</Heading>

            <Text className="text-gray-800">20/08/2023 ás 20:00</Text>
          </Box>
          <HStack className="items-center px-4 py-2 gap-2  bg-gray-200 rounded-full max-w-[40%]">
            <View className="h-2 w-2 bg-green-dark rounded-full" />
            <Text size="sm" className="text-gray-900 ">
              Dentro da dieta
            </Text>
          </HStack>

          <VStack className="flex-1 justify-end gap-2">
            <Link href="/edit-meal" asChild>
              <Button>
                <ButtonText>Editar refeição</ButtonText>
              </Button>
            </Link>
            <Button action="secondary">
              <ButtonText>Excluir refeição</ButtonText>
            </Button>
          </VStack>
        </VStack>
      </VStack>
    </>
  )
}
