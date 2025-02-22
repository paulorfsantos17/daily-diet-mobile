import type { MealDTO } from '@/dto/mealDTO'
import { api } from '@/libs/axios'
import { transformMealDTOToHttp } from '@/presenters/meal-presenter'

export async function newMeal(data: MealDTO) {
  const mealFormattedToHttp = transformMealDTOToHttp(data)
  await api.post('/meals', mealFormattedToHttp)
}
