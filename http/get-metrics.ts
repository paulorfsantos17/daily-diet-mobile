import type { MetricsDTO } from '@/dto/metricsDTO'
import { api } from '@/libs/axios'

export async function getMetrics(): Promise<MetricsDTO> {
  const response = await api.get('/metrics')
  const { metrics } = response.data

  return metrics
}
