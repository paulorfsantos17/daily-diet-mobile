import type { MealDTO } from '@/dto/mealDTO'
import { api } from '@/libs/axios'
import { transformMealDTOToHttp } from '@/presenters/meal-presenter'

export async function updateMeal(data: MealDTO, id: string) {
  const mealFormattedToHttp = transformMealDTOToHttp(data)
  await api.put(`/meals/${id}`, mealFormattedToHttp)
}
