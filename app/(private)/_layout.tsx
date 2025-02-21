import { storageAuthTokenGet } from '@/storage/storageAuthToken'
import { Stack, useRouter } from 'expo-router'
import React, { useEffect } from 'react'

export default function PrivateLayout() {
  const router = useRouter()
  async function checkLogin() {
    const token = await storageAuthTokenGet()

    if (!token) {
      router.push('/(auth)')
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
    </Stack>
  )
}
