import { proxy } from 'valtio'

export const simulateStore = proxy<{
  resultA: any | null
  resultB: any | null
  isLoading: boolean
}>({
  resultA: null,
  resultB: null,
  isLoading: false,
})
