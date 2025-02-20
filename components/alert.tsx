import { View, Text } from 'react-native'

interface IAlertProps {
  children: React.ReactNode
}

export function AlertContent({ children }: IAlertProps) {
  return (
    <View className="absolute inset-0 w-full h-full bg-black/25 z-10 justify-center px-8">
      <View className="bg-gray-200 w-full h-52 rounded-lg p-8 gap-8">
        {children}
      </View>
    </View>
  )
}

interface IAlertTextProps {
  message: string
}

export function AlertText({ message }: IAlertTextProps) {
  return (
    <Text className="text-xl font-bold text-gray-800 text-center px-3">
      {message}
    </Text>
  )
}
