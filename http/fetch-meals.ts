import { api } from '@/libs/axios'
import { transformMealHttpToDTO } from '@/presenters/meal-presenter'

export async function fetchMeals() {
  const response = await api.get('/meals')

  const { meals } = response.data

  return meals.map(transformMealHttpToDTO)
}
