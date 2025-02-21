import { api } from '@/libs/axios'
import type { AuthDTO } from '@/dto/authDTO'
export async function authUser(data: AuthDTO) {
  const response = await api.post('/auth', data)

  return response.data
}
