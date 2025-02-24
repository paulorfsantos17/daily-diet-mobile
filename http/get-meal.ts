import type { MealDTO } from '@/dto/mealDTO'
import { api } from '@/libs/axios'
import { transformMealHttpToDTO } from '@/presenters/meal-presenter'

export async function getMeal(mealId: string): Promise<MealDTO> {
  const response = await api.get(`/meals/${mealId}`)
  const meal = transformMealHttpToDTO(response.data.meal)

  return meal
}
