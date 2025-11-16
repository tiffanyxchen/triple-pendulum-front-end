import { useState } from 'react'
import { useSnapshot } from 'valtio'
import styled from 'styled-components'

import { simulateStore } from './Simulate.State'
import { useSimulate } from './useSimulate'

const Container = styled.div`
  padding: 24px;
  max-width: 900px;
  margin: 0 auto;
`

const FormRow = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 24px;
`

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 12px;
  width: 50%;
`

const Input = styled.input`
  width: 100%;
  margin-bottom: 8px;
  padding: 8px;
  font-size: 16px;
`

const Button = styled.button`
  padding: 12px 20px;
  background: #0077ff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    background: #888;
    cursor: not-allowed;
  }
`

const GIFRow = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 30px;
  justify-content: center;
`

export default function SimulatePage() {
  const snap = useSnapshot(simulateStore)
  const { runSimulations } = useSimulate()

  // --- Form State ---
  const [anglesA, setAnglesA] = useState({
    theta1_init: 0.5,
    theta2_init: 0.6,
    theta3_init: 0.7,
  })

  const [anglesB, setAnglesB] = useState({
    theta1_init: -0.5,
    theta2_init: -0.6,
    theta3_init: -0.7,
  })

  async function handleSubmit() {
    await runSimulations(anglesA, anglesB)
  }

  return (
    <Container>
      <h2>Run Two Triple-Pendulum Simulations</h2>

      <FormRow>
        {/* -------- Simulation A Form -------- */}
        <Card>
          <h3>Simulation A</h3>

          <Input
            type="number"
            step="0.01"
            value={anglesA.theta1_init}
            onChange={(e) =>
              setAnglesA({ ...anglesA, theta1_init: +e.target.value })
            }
            placeholder="theta1"
          />

          <Input
            type="number"
            step="0.01"
            value={anglesA.theta2_init}
            onChange={(e) =>
              setAnglesA({ ...anglesA, theta2_init: +e.target.value })
            }
            placeholder="theta2"
          />

          <Input
            type="number"
            step="0.01"
            value={anglesA.theta3_init}
            onChange={(e) =>
              setAnglesA({ ...anglesA, theta3_init: +e.target.value })
            }
            placeholder="theta3"
          />
        </Card>

        {/* -------- Simulation B Form -------- */}
        <Card>
          <h3>Simulation B</h3>

          <Input
            type="number"
            step="0.01"
            value={anglesB.theta1_init}
            onChange={(e) =>
              setAnglesB({ ...anglesB, theta1_init: +e.target.value })
            }
            placeholder="theta1"
          />

          <Input
            type="number"
            step="0.01"
            value={anglesB.theta2_init}
            onChange={(e) =>
              setAnglesB({ ...anglesB, theta2_init: +e.target.value })
            }
            placeholder="theta2"
          />

          <Input
            type="number"
            step="0.01"
            value={anglesB.theta3_init}
            onChange={(e) =>
              setAnglesB({ ...anglesB, theta3_init: +e.target.value })
            }
            placeholder="theta3"
          />
        </Card>
      </FormRow>

      <Button onClick={handleSubmit} disabled={snap.isLoading}>
        {snap.isLoading ? 'Running Simulations...' : 'Run Simulations'}
      </Button>

      {/* -------- Simulation GIF Display -------- */}
      {snap.resultA && snap.resultB && (
        <GIFRow>
          <div>
            <h3>Simulation A GIF</h3>
            <img
              src={`${import.meta.env.VITE_API_URL}/${snap.resultA.gifPath}`}
              width={300}
            />
          </div>

          <div>
            <h3>Simulation B GIF</h3>
            <img
              src={`${import.meta.env.VITE_API_URL}/${snap.resultB.gifPath}`}
              width={300}
            />
          </div>
        </GIFRow>
      )}
    </Container>
  )
}
