import { AlertContent, AlertText } from '@/components/alert'
import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import type { MealDTO } from '@/dto/mealDTO'
import { deleteMeal } from '@/http/delete-meal'
import { getMeal } from '@/http/get-meal'
import { colors } from '@/theme/colors'
import { Link, useLocalSearchParams, useRouter } from 'expo-router'
import { ArrowLeft } from 'phosphor-react-native'
import { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'

export default function Meal() {
  const [showAlert, setShowAlert] = useState(false)
  const [meal, setMeal] = useState({} as MealDTO)

  const router = useRouter()

  const { id } = useLocalSearchParams()

  const getMealData = useCallback(async () => {
    const response = await getMeal(id as string)
    setMeal(response)
  }, [id])

  async function onDeleteMeal() {
    try {
      deleteMeal(id as string)
      router.push('/(private)/home')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getMealData()
  }, [getMealData, id])

  return (
    <>
      {showAlert && (
        <AlertContent>
          <AlertText message="Deseja realmente excluir o registro da refeição?" />
          <Box className="flex-row   gap-4 justify-center">
            <Button
              onPress={() => setShowAlert(false)}
              variant="outline"
              className="w-1/2"
            >
              <ButtonText>Cancelar</ButtonText>
            </Button>
            <Button className="w-1/2">
              <ButtonText onPress={onDeleteMeal}>Sim, excluir</ButtonText>
            </Button>
          </Box>
        </AlertContent>
      )}
      <VStack
        className={
          'flex-1  gap-8' +
          (meal.isOnDiet ? ' bg-green-light' : ' bg-red-light')
        }
      >
        <HStack className="mt-20 mx-6">
          <Link href="/(private)/home">
            <ArrowLeft size={24} color={colors.gray[800]} />
          </Link>
          <Heading className="text-lg  flex-1 text-center">Refeição</Heading>
        </HStack>

        <VStack className="flex-1 gap-8 bg-gray-100 rounded-t-[20px] px-6 pt-8 pb-8">
          <Box className="gap-2">
            <Heading>{meal.name}</Heading>
            <Text className="text-gray-800">{meal.description}</Text>
          </Box>

          <Box className="gap-2">
            <Heading size="xs">Data e hora</Heading>

            <Text className="text-gray-800">
              {meal.date} ás {meal.hour}
            </Text>
          </Box>
          <HStack className="items-center px-4 py-2 gap-2  bg-gray-200 rounded-full max-w-[40%]">
            <View
              className={
                'h-2 w-2 rounded-full' +
                (meal.isOnDiet ? ' bg-green-500' : ' bg-red-500')
              }
            />
            <Text size="sm" className="text-gray-900 ">
              {meal.isOnDiet ? 'dentro da dieta' : 'fora da dieta'}
            </Text>
          </HStack>

          <VStack className="flex-1 justify-end gap-2">
            <Link href="/edit-meal" asChild>
              <Button>
                <ButtonText>Editar refeição</ButtonText>
              </Button>
            </Link>
            <Button action="secondary" onPress={() => setShowAlert(true)}>
              <ButtonText>Excluir refeição</ButtonText>
            </Button>
          </VStack>
        </VStack>
      </VStack>
    </>
  )
}
