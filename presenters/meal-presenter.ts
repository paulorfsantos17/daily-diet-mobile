import { MealDTO } from '@/dto/mealDTO'
import dayjs from 'dayjs'

interface MealHttp {
  date: Date
  description: string
  id: string
  isOnDiet: boolean
  name: string
  userId: string
}
export function mealPresenter(meal: MealHttp): MealDTO {
  return {
    id: meal.id,
    name: meal.name,
    description: meal.description,
    isOnDiet: meal.isOnDiet,
    userId: meal.userId,
    hours: dayjs(meal.date).format('HH:mm'),
    date: dayjs(meal.date).format('DD:MM:YY'),
  }
}
