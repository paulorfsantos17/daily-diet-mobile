import { Box } from '@/components/ui/box'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import type { MetricsDTO } from '@/dto/metricsDTO'
import { getMetrics } from '@/http/get-metrics'
import { colors } from '@/theme/colors'
import { Link } from 'expo-router'
import { ArrowLeft } from 'phosphor-react-native'
import { useCallback, useEffect, useState } from 'react'

export default function Metrics() {
  const [metrics, setMetrics] = useState<MetricsDTO>({} as MetricsDTO)
  const isBestPercentual = metrics.percentageMealsWithinDiet >= 50

  const fetchMetricsData = useCallback(async () => {
    const metrics = await getMetrics()
    setMetrics(metrics)
  }, [])

  useEffect(() => {
    fetchMetricsData()
  }, [fetchMetricsData])

  return (
    <Box
      className={
        'flex-1 pt-14 gap-8' +
        (isBestPercentual ? ' bg-green-light' : ' bg-red-light')
      }
    >
      <VStack className="mx-6">
        <Link href="/(private)/home">
          <ArrowLeft
            size={24}
            color={isBestPercentual ? colors.green.dark : colors.red.dark}
          />
        </Link>
        <Heading className="text-[2rem] text-center">
          {metrics.percentageMealsWithinDiet
            ? metrics.percentageMealsWithinDiet.toFixed(2)
            : 0}
          %
        </Heading>
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
              {metrics.bestDietSequence}
            </Text>
            <Text className="text-gray-800 text-center">
              melhor sequência de pratos dentro da dieta
            </Text>
          </Box>

          <Box className="bg-gray-200 p-4 rounded-lg gap-5 ">
            <Text className="text-2xl text-gray-900 font-bold text-center">
              {metrics.totalMeals}
            </Text>
            <Text className="text-gray-800 text-center">
              refeições registradas
            </Text>
          </Box>

          <HStack className="gap-4 mr-4">
            <Box className="bg-green-light p-4 rounded-lg gap-5 w-1/2">
              <Text className="text-2xl text-gray-900 font-bold text-center">
                {metrics.mealsWithinDiet}
              </Text>
              <Text className="text-gray-800 text-center">
                refeições dentro da dieta
              </Text>
            </Box>

            <Box className="bg-red-light p-4 rounded-lg gap-5 w-1/2">
              <Text className="text-2xl text-gray-900 font-bold text-center">
                {metrics.mealsOutOfDiet}
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
