import { HStack } from '@/components/ui/hstack'
import { VStack } from '@/components/ui/vstack'
import Logo from '@/assets/svgs/logo.svg'
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from '@/components/ui/avatar'
import { Box } from '@/components/ui/box'
import { ArrowUpRight, Plus } from 'phosphor-react-native'
import { View, SectionList } from 'react-native'
import { colors } from '@/theme/colors'
import { Heading } from '@/components/ui/heading'
import { Button, ButtonText } from '@/components/ui/button'
import { CardMeal } from '@/components/card-meal'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'
import { Text } from '@/components/ui/text'
import { fetchMeals } from '@/http/fetch-meals'
import { useCallback, useEffect, useState } from 'react'
import type { MealDTO } from '@/dto/mealDTO'

type MealReducer = {
  title: string
  data: Array<MealDTO>
}[]

export default function HomeScreen() {
  const [meals, setMeals] = useState<MealReducer>([])

  const fetchMealsData = useCallback(async () => {
    const meals = await fetchMeals()
    setMeals(groupMealsByDate(meals))
  }, [])

  function groupMealsByDate(meals: MealDTO[]): MealReducer {
    return meals.reduce<MealReducer>((acc, meal) => {
      const existingGroup = acc.find((group) => group.title === meal.date)

      if (existingGroup) {
        existingGroup.data.push(meal)
      } else {
        acc.push({ title: meal.date, data: [meal] })
      }

      return acc
    }, [])
  }

  useEffect(() => {
    fetchMealsData()
  }, [fetchMealsData])

  return (
    <VStack space="4xl" className="m-6 mt-16 flex-1">
      <HStack className="justify-between">
        <Logo className="color-gray-900" />
        <Avatar className="size-10">
          <AvatarBadge className="h-full w-full justify-center items-center border-gray-800">
            <AvatarFallbackText className="text-center">PF</AvatarFallbackText>
            <AvatarImage
              source={{ uri: 'https://github.com/paulorfsantos17.png' }}
            />
          </AvatarBadge>
        </Avatar>
      </HStack>
      <Link href="/metrics">
        <Box className="rounded-lg w-full bg-green-light items-center justify-center p-3 pb-6">
          <View className="self-end">
            <ArrowUpRight
              color={colors.green.dark}
              style={{ width: 24, height: 24 }}
            />
          </View>
          <Heading className="text-3xl text-gray-900">90,86%</Heading>
          <Text className="text-sm text-gray-800">
            das refeições dentro da dieta
          </Text>
        </Box>
      </Link>

      <VStack className="gap-4 mx-6 flex-1">
        <Text className="text-lg text-gray-900">Refeições</Text>
        <Link href="/new-meal" asChild>
          <Button size="md" className=" w-full">
            <Plus color={colors.white} size={16} />
            <ButtonText>Nova Refeição</ButtonText>
          </Button>
        </Link>
        <VStack className="flex-1 rounded-lg">
          <SectionList
            sections={meals}
            keyExtractor={(item, index) => item.date + index}
            renderItem={(item) => {
              console.log('🚀 ~ HomeScreen ~ item:', item)
              return (
                <Link href="/meal">
                  <CardMeal hour={item.item.hours} title={item.item.name} />
                </Link>
              )
            }}
            renderSectionHeader={({ section: { title } }) => (
              <Text className="text-lg text-gray-900 font-bold mt-4 mb-2">
                {title}
              </Text>
            )}
          />
        </VStack>
        <LinearGradient
          colors={['#FAFAFA00', colors.white]}
          className="absolute bottom-0 left-0 right-0 h-20 z-10"
        />
      </VStack>
    </VStack>
  )
}
