import { api } from '@/libs/axios'
import { mealPresenter } from '@/presenters/meal-presenter'

export async function fetchMeals() {
  const response = await api.get('/meals')

  const { meals } = response.data

  return meals.map(mealPresenter)
}
