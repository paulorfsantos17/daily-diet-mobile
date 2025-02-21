import { storageAuthTokenGet } from '@/storage/storageAuthToken'
import { Stack, useRouter } from 'expo-router'
import React, { useCallback, useEffect } from 'react'

export default function PrivateLayout() {
  const router = useRouter()

  const checkLogin = useCallback(async () => {
    const token = await storageAuthTokenGet()

    if (!token) {
      router.push('/(auth)')
    }
  }, [router])

  useEffect(() => {
    checkLogin()
  }, [checkLogin])

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
    </Stack>
  )
}
