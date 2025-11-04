import { proxy } from 'valtio'
import type { SimulationResult } from '../UserInfo/UserInfo.State'

export const simulateStore = proxy<{
  resultA: SimulationResult | null
  resultB: SimulationResult | null
  isLoading: boolean
}>({
  resultA: null,
  resultB: null,
  isLoading: false,
})
