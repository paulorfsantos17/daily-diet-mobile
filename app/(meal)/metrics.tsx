import { Box } from '@/components/ui/box'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { colors } from '@/theme/colors'
import { Link } from 'expo-router'
import { ArrowLeft } from 'phosphor-react-native'

export default function Metrics() {
  return (
    <Box className="bg-red-light flex-1 pt-14 gap-8">
      <VStack className="mx-6">
        <Link href="/">
          <ArrowLeft size={24} color={colors.red.dark} />
        </Link>
        <Heading className="text-[2rem] text-center">30,21%</Heading>
        <Text className="text-center text-sm mt-1">
          das refeições dentro da dieta
        </Text>
      </VStack>

      <VStack className="flex-1 bg-gray-100 px-6 rounded-t-[20px] gap-5">
        <Text className="text-sm text-gray-900 mt-8 font-bold text-center">
          Estatísticas gerais
        </Text>

        <VStack className="gap-4 ">
          <Box className="bg-gray-200 p-4 rounded-lg gap-5">
            <Text className="text-2xl text-gray-900 font-bold text-center">
              4
            </Text>
            <Text className="text-gray-800 text-center">
              melhor sequência de pratos dentro da dieta
            </Text>
          </Box>

          <Box className="bg-gray-200 p-4 rounded-lg gap-5 ">
            <Text className="text-2xl text-gray-900 font-bold text-center">
              4
            </Text>
            <Text className="text-gray-800 text-center">
              refeições registradas
            </Text>
          </Box>

          <HStack className="gap-4 mr-4">
            <Box className="bg-green-light p-4 rounded-lg gap-5 w-1/2">
              <Text className="text-2xl text-gray-900 font-bold text-center">
                4
              </Text>
              <Text className="text-gray-800 text-center">
                refeições dentro da dieta
              </Text>
            </Box>

            <Box className="bg-red-light p-4 rounded-lg gap-5 w-1/2">
              <Text className="text-2xl text-gray-900 font-bold text-center">
                4
              </Text>
              <Text className="text-gray-800 text-center">
                refeições fora da dieta
              </Text>
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  )
}
