import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { Input, InputField } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import type { MealDTO } from '@/dto/mealDTO'
import { getMeal } from '@/http/get-meal'
import { updateMeal } from '@/http/update-meal'
import { colors } from '@/theme/colors'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLocalSearchParams, Link, useRouter } from 'expo-router'

import { ArrowLeft } from 'phosphor-react-native'
import { useCallback, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { View } from 'react-native'
import { z } from 'zod'

const updateMealSchema = z.object({
  name: z.string(),
  description: z.string(),
  date: z
    .string()
    .regex(
      /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{2}$/,
      'Formato inválido. Use DD/MM/YY',
    )
    .refine((date) => {
      const [day, month, year] = date.split('/').map(Number)
      const fullYear = 2000 + year // Considera 20YY como padrão
      const isValidDate = new Date(fullYear, month - 1, day).getDate() === day
      return isValidDate
    }, 'Data inválida.'),
  hour: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Formato inválido. Use HH:MM (24h)'),
  isOnDiet: z.boolean(),
})

interface UpdateMealData extends z.infer<typeof updateMealSchema> {}

export default function EditMeal() {
  const router = useRouter()
  const [meal, setMeal] = useState({} as MealDTO)
  const [loading, setLoading] = useState(true)

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<UpdateMealData>({
    resolver: zodResolver(updateMealSchema),
    values: {
      name: meal.name || '',
      description: meal.description || '',
      date: meal.date || '',
      hour: meal.hour || '',
      isOnDiet: meal.isOnDiet,
    },
  })

  const isDiet = watch('isOnDiet')

  const { id } = useLocalSearchParams()

  const getMealData = useCallback(async () => {
    const response = await getMeal(id as string)
    setMeal(response)
  }, [id])

  async function onUpdateMeal(data: UpdateMealData) {
    try {
      await updateMeal(data, id as string)
      reset()
      router.push('/(private)/home')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    getMealData()
    setLoading(false)
  }, [getMealData, id])

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <VStack className="flex-1 bg-gray-300 gap-8">
      <HStack className="mt-20 mx-6">
        <Link href="/(private)/home">
          <ArrowLeft size={24} color={colors.gray[800]} />
        </Link>
        <Heading className="text-lg  flex-1 text-center">
          Editar refeição
        </Heading>
      </HStack>

      <VStack className="flex-1 bg-gray-100 rounded-t-[20px] px-6 pt-8 pb-8">
        <Text className="text-sm text-gray-800 font-bold">Nome</Text>
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
          <Text className="text-red-500">{errors.name.message}</Text>
        )}

        <Text className="text-sm text-gray-800 font-bold">Descrição</Text>
        <Controller
          control={control}
          name="description"
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
        {errors.description && (
          <Text className="text-red-500">{errors.description.message}</Text>
        )}

        <HStack className="gap-4 mr-4">
          <Box className="w-1/2 ">
            <Text className="text-sm text-gray-800 font-bold">Data</Text>
            <Controller
              control={control}
              name="date"
              render={({ field: { value, onChange, onBlur } }) => (
                <Input size="xl" className="mb-4">
                  <InputField
                    placeholder="15/08/24"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                </Input>
              )}
            />
            {errors.date && (
              <Text className="text-red-500">{errors.date.message}</Text>
            )}
          </Box>

          <Box className="w-1/2">
            <Text className="text-sm text-gray-800 font-bold">Hora</Text>
            <Controller
              control={control}
              name="hour"
              render={({ field: { value, onChange, onBlur } }) => (
                <Input size="xl" className="mb-4">
                  <InputField
                    placeholder="22:00"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                </Input>
              )}
            />
            {errors.hour && (
              <Text className="text-red-500">{errors.hour.message}</Text>
            )}
          </Box>
        </HStack>

        <Text className="text-sm text-gray-800 font-bold">Hora</Text>
        <HStack className="gap-4 pr-4">
          <Button
            onPress={() => setValue('isOnDiet', true)}
            variant="solid"
            className={`bg-gray-200  rounded-md w-1/2 ${isDiet && 'bg-green-light border border-green-dark'}`}
          >
            <View className="h-2 w-2 bg-green-dark rounded-full" />
            <Text className="text-gray-900 font-bold">Sim</Text>
          </Button>
          <Button
            onPress={() => setValue('isOnDiet', false)}
            variant="solid"
            className={`
              bg-gray-200 rounded-md  w-1/2
              ${!isDiet && 'bg-red-light border border-red-dark'}
              ${isDiet === undefined && 'bg-gray-200 border-0'}
            `}
          >
            <View className="h-2 w-2 bg-red-dark rounded-full" />
            <Text className="text-gray-900 font-bold">Não</Text>
          </Button>
        </HStack>
        <VStack className="flex-1 justify-end">
          <Button onPress={handleSubmit(onUpdateMeal)}>
            <ButtonText className="text-white">Salvar Alteração</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </VStack>
  )
}
