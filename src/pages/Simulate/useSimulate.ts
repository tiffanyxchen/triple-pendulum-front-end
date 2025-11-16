import axios from 'axios'
import { simulateStore } from './Simulate.State'
import type { SimulationResult } from '../UserInfo/UserInfo.State'
import type { AxiosError } from 'axios'

export function useSimulate() {
  async function runSimulations(
    anglesA: {
      theta1_init: number
      theta2_init: number
      theta3_init: number
    },
    anglesB: {
      theta1_init: number
      theta2_init: number
      theta3_init: number
    }
  ) {
    simulateStore.isLoading = true

    try {
      // Run both simulations in parallel
      const [simA, simB] = await Promise.all([
        axios.post<SimulationResult>('/v1/results/simulate', anglesA),
        axios.post<SimulationResult>('/v1/results/simulate', anglesB),
      ])

      simulateStore.resultA = simA.data
      simulateStore.resultB = simB.data

    } catch (err) {
      const error = err as AxiosError
      console.error('Simulation error:', error.message)
      throw error

    } finally {
      simulateStore.isLoading = false
    }
  }

  return { runSimulations }
}
