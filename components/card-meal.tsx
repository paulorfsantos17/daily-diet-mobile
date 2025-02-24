import { Box } from './ui/box'
import { Divider } from './ui/divider'
import { HStack } from './ui/hstack'
import { Text } from './ui/text'
interface CardMealProps {
  title: string
  hour: string
  isOnDiet: boolean
}

export function CardMeal({ hour, title, isOnDiet }: CardMealProps) {
  return (
    <HStack className="border-gray-300 border rounded-md flex  justify-around items-center py-5 px-4 mb-2 ">
      <HStack className="w-full flex items-center flex-1">
        <Text className="text-xs font-bold">{hour}</Text>
        <Divider orientation="vertical" className="mx-2 bg-gray-400 h-[14px]" />
        <Text className="text-gray-800 text-sm">{title}</Text>
      </HStack>
      <Box
        className={
          'h-4 w-4  rounded-full' +
          (isOnDiet ? ' bg-green-light' : ' bg-red-light')
        }
      />
    </HStack>
  )
}
