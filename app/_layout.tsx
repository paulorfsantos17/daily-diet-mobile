/* eslint-disable camelcase */
import { Stack } from 'expo-router'

import '@/global.css'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'

import { StatusBar } from 'expo-status-bar'

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  if (!fontsLoaded) {
    return
  }

  return (
    <GluestackUIProvider mode="light">
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
      </Stack>

      <StatusBar style="auto" />
    </GluestackUIProvider>
  )
}
