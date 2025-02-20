import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { Input, InputField } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { colors } from '@/theme/colors'
import { Link } from 'expo-router'
import { ArrowLeft } from 'phosphor-react-native'
import { View } from 'react-native'

export default function EditMeal() {
  return (
    <VStack className="flex-1 bg-gray-300 gap-8">
      <HStack className="mt-20 mx-6">
        <Link href="/">
          <ArrowLeft size={24} color={colors.gray[800]} />
        </Link>
        <Heading className="text-lg  flex-1 text-center">
          Editar refeição
        </Heading>
      </HStack>

      <VStack className="flex-1 bg-gray-100 rounded-t-[20px] px-6 pt-8 pb-8">
        <Text className="text-sm text-gray-800 font-bold">Nome</Text>
        <Input size="xl" className="mb-4">
          <InputField />
        </Input>

        <Text className="text-sm text-gray-800 font-bold">Descrição</Text>
        <Input size="xl" className="h-40 mb-4">
          <InputField />
        </Input>

        <HStack className="gap-4 mr-4">
          <Box className="w-1/2 ">
            <Text className="text-sm text-gray-800 font-bold">Data</Text>
            <Input size="xl" className="mb-4">
              <InputField />
            </Input>
          </Box>

          <Box className="w-1/2">
            <Text className="text-sm text-gray-800 font-bold">Hora</Text>
            <Input size="xl" className=" mb-4">
              <InputField />
            </Input>
          </Box>
        </HStack>

        <Text className="text-sm text-gray-800 font-bold">Hora</Text>
        <HStack className="gap-4 pr-4">
          <Button variant="solid" className="bg-gray-200  rounded-md w-1/2">
            <View className="h-2 w-2 bg-green-dark rounded-full" />
            <Text className="text-gray-900 font-bold">Sim</Text>
          </Button>
          <Button variant="solid" className="bg-gray-200 rounded-md  w-1/2">
            <View className="h-2 w-2 bg-red-dark rounded-full" />
            <Text className="text-gray-900 font-bold">Não</Text>
          </Button>
        </HStack>
        <VStack className="flex-1 justify-end">
          <Button>
            <ButtonText className="text-white">Salvar Alteração</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </VStack>
  )
}
