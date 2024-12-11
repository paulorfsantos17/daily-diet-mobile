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
import { Text, View, SectionList } from 'react-native'
import { colors } from '@/theme/colors'
import { Heading } from '@/components/ui/heading'
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button'
import { CardMeal } from '@/components/card-meal'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'

const DATA_MEAL = [
  {
    title: '12.02.22',
    data: [
      { title: 'X-TUDO', hour: '20:00', isDiet: false },
      { title: 'Salada', hour: '20:00', isDiet: true },
      { title: 'X-TUDO', hour: '20:00', isDiet: false },
    ],
  },
  {
    title: '11.02.22',
    data: [
      { title: 'X-TUDO', hour: '20:00', isDiet: false },
      { title: 'Almoco', hour: '20:00', isDiet: true },
      { title: 'X-TUDO', hour: '20:00', isDiet: false },
    ],
  },
  {
    title: '11.02.22',
    data: [
      { title: 'X-TUDO', hour: '20:00', isDiet: false },
      { title: 'Almoco', hour: '20:00', isDiet: true },
      { title: 'X-TUDO', hour: '20:00', isDiet: false },
    ],
  },
  {
    title: '11.02.22',
    data: [
      { title: 'X-TUDO', hour: '20:00', isDiet: false },
      { title: 'Almoco', hour: '20:00', isDiet: true },
      { title: 'X-TUDO', hour: '20:00', isDiet: false },
    ],
  },
]

export default function HomeScreen() {
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
        <Button size="md">
          <ButtonIcon size="md">
            <Plus color={colors.white} size={16} />
          </ButtonIcon>
          <ButtonText className="text-white font-bold">
            Nova Refeição
          </ButtonText>
        </Button>
        <VStack className="flex-1 rounded-lg">
          <SectionList
            sections={DATA_MEAL}
            keyExtractor={(item, index) => item.title + index}
            renderItem={() => {
              return <CardMeal />
            }}
            renderSectionHeader={({ section: { title } }) => (
              <Text className="text-lg text-gray-900 font-bold mt-4 mb-2">
                {title}
              </Text>
            )}
          />
        </VStack>{' '}
        <LinearGradient
          colors={['#FAFAFA00', colors.white]}
          className="absolute bottom-0 left-0 right-0 h-20 z-10"
        />
      </VStack>
    </VStack>
  )
}
