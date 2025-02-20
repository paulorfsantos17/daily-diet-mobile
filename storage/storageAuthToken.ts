import AsyncStorage from '@react-native-async-storage/async-storage'

import { AUTH_TOKEN_STORAGE } from './storageConfig'

interface storageAuthTokenProps {
  token: string
}

export async function storageAuthTokenSave({ token }: storageAuthTokenProps) {
  await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, token)
}

export async function storageAuthTokenGet() {
  const response = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE)
  const { token }: storageAuthTokenProps = response ? JSON.parse(response) : {}

  return { token }
}
export async function storageAuthTokenRemove() {
  await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE)
}
