import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import FailMealImage from '@/assets/svgs/fail-meal.svg'
import { View } from 'react-native'
import { Button, ButtonText } from '@/components/ui/button'
import { Link } from 'expo-router'

export default function FailMeal() {
  return (
    <View className="items-center justify-center h-full gap-6 bg-gray-200">
      <Heading size="2xl" className="text-red-dark">
        Que pena!
      </Heading>

      <Text>
        Você <Text className="font-bold">saiu da dieta</Text> dessa vez, mas
        continue se esforçando e não desista!
      </Text>
      <FailMealImage />
      <Link href="/" asChild>
        <Button>
          <ButtonText>Ir para a página inicial</ButtonText>
        </Button>
      </Link>
    </View>
  )
}
