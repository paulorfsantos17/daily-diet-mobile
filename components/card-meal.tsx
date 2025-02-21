import { Box } from './ui/box'
import { Divider } from './ui/divider'
import { HStack } from './ui/hstack'
import { Text } from './ui/text'
interface CardMealProps {
  title: string
  hour: string
}

export function CardMeal({ hour, title }: CardMealProps) {
  return (
    <HStack className="border-gray-300 border rounded-md flex  justify-around items-center py-5 px-4 mb-2 ">
      <HStack className="w-full flex items-center flex-1">
        <Text className="text-xs font-bold">{hour}</Text>
        <Divider orientation="vertical" className="mx-2 bg-gray-400 h-[14px]" />
        <Text className="text-gray-800 text-sm">{title}</Text>
      </HStack>
      <Box className="h-4 w-4 bg-gray-400 rounded-full" />
    </HStack>
  )
}
