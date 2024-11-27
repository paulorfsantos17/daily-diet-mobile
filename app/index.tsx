import { HStack } from '@/components/ui/hstack'
import { VStack } from '@/components/ui/vstack'
import Logo from '@/assets/svgs/logo.svg'
import { ArrowLeft } from 'phosphor-react-native'

export default function HomeScreen() {
  return (
    <VStack className="m-6 mt-16">
      <HStack>
        <Logo />
        <ArrowLeft />
      </HStack>
    </VStack>
  )
}
