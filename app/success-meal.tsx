import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import SuccessMealImage from '../assets/svgs/success-meal.svg'
import { View } from 'react-native'
import { Button, ButtonText } from '@/components/ui/button'
import { Link } from 'expo-router'

export default function SuccessMeal() {
  return (
    <View className="items-center justify-center h-full gap-6 bg-gray-200">
      <Heading size="2xl" className="text-green-dark">
        Continue Assim!
      </Heading>

      <Text>
        Você continua <Text className="font-bold">dentro da dieta</Text>. Muito
        bem!
      </Text>
      <SuccessMealImage />
      <Link href="/" asChild>
        <Button>
          <ButtonText>Ir para a página inicial</ButtonText>
        </Button>
      </Link>
    </View>
  )
}
