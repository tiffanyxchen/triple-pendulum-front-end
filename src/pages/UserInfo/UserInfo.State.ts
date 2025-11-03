import { proxy } from 'valtio'

export const SimulationStatus = {
  Pending: 'calculating...',
  Shipped: 'calculation completed',
  // OutOfStock: 'out_of_stock',
} as const

export type SimulationStatusKeys =
  (typeof SimulationStatus)[keyof typeof SimulationStatus]

export interface SimulationResult {
  id: string
  name: string
  theta1_init: number
  theta2_init: number
  theta3_init: number
  gifPath: string | null
  createdAt: string
  status?: SimulationStatusKeys
}

export const simulationStore = proxy<{
  results: SimulationResult[]
  selectedResultId: string | null
}>({
  results: [],
  selectedResultId: null,
})

export interface UserData {
  id: number
  name: string
  email: string
  roles?: string[] // optional, matches backend
}

export const userStore = proxy<{
  user: UserData | null
}>({
  user: null,
})
