import { proxy } from 'valtio'
import type { SimulationResult } from '../UserInfo/UserInfo.State'

export const simulateStore = proxy<{
  gifA: string | null
  gifB: string | null
  resultA: SimulationResult | null
  resultB: SimulationResult | null
  isLoading: boolean
}>({
  gifA: null,
  gifB: null,
  resultA: null,
  resultB: null,
  isLoading: false,
})

