import { MealDTO } from '@/dto/mealDTO'
import dayjs from 'dayjs'

interface MealHttpRequest {
  date: Date
  description: string
  id: string
  isOnDiet: boolean
  name: string
  userId?: string
}
export function transformMealHttpToDTO(meal: MealHttpRequest): MealDTO {
  console.log(meal)
  return {
    id: meal.id,
    name: meal.name,
    description: meal.description,
    isOnDiet: meal.isOnDiet,
    hour: dayjs(meal.date).format('HH:mm'),
    date: dayjs(meal.date).format('DD/MM/YY'),
  }
}

export function transformMealDTOToHttp(meal: MealDTO): MealHttpRequest {
  const [day, month, year] = meal.date.split('/').map(Number)
  const date = new Date(
    year + 2000,
    month - 1,
    day,
    ...meal.hour.split(':').map(Number),
  )

  return {
    date,
    description: meal.description,
    id: meal.id || '',
    isOnDiet: meal.isOnDiet,
    name: meal.name,
  }
}
