import { api } from '@/libs/axios'

export async function deleteMeal(mealId: string) {
  await api.delete(`/meals/${mealId}`)
}
