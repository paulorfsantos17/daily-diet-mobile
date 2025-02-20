import type { UserDTO } from '@/dto/userDTO'
import { api } from '@/libs/axios'

export async function registerUser(data: UserDTO) {
  const response = await api.post('/register', {
    name: data.name,
    email: data.email,
    password: data.password,
    confirmPassword: data.password,
  })

  return response.data
}
