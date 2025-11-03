import styled from 'styled-components'
import { useEffect } from 'react'
import { useErrorBoundary } from 'react-error-boundary'
import CircularProgress from '@mui/material/CircularProgress'
import { useSnapshot } from 'valtio'

import useUserInfo from './useUserInfo'
import Header from '../../components/Header/Header'
import { simulationStore } from './UserInfo.State'
import { userStore } from './UserInfo.State'

const Container = styled.div`
  border: 20px solid #808080;
  height: 100vh;
  width: 100%;
  padding: 1rem;
`

const ResultCard = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #ccc;
  border-radius: 8px;
`

const UserInfo = () => {
  const {
    orderData,
    ordersAreLoading,
    ordersErrors,
    userData,
    userIsLoading,
    userErrors,
  } = useUserInfo()

  const orderSnap = useSnapshot(simulationStore)
  const userSnap = useSnapshot(userStore)

  const { showBoundary } = useErrorBoundary()

  // Save API data into stores
  useEffect(() => {
    if (orderData) {
      // If backend returns raw array
      simulationStore.results = Array.isArray(orderData)
        ? orderData
        : orderData.results ?? []
    }
  }, [orderData])

  useEffect(() => {
    if (userData) userStore.user = userData
  }, [userData])

  const onSubmitSearch = (searchText: string) => {
    console.log('Search for:', searchText)
  }

  if (userIsLoading || ordersAreLoading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    )
  }

  if (userErrors || ordersErrors) {
    showBoundary(userErrors || ordersErrors)
    return null
  }

  if (!userSnap.user) {
    return <Container>No user found</Container>
  }

  return (
    <Container>
      <Header userName={userSnap.user.name} onSubmitSearch={onSubmitSearch} />

      <div style={{ marginTop: '2rem' }}>
        <h2>Saved Simulations</h2>

        {orderSnap.results.length === 0 ? (
          <p>No simulations found.</p>
        ) : (
          orderSnap.results.map((sim) => (
            <ResultCard key={sim.id}>
              <h3>{sim.name}</h3>
              <p><strong>ID:</strong> {sim.id}</p>
              <p><strong>Created:</strong> {sim.createdAt}</p>

              {/* Handle missing GIF */}
              {sim.gifPath ? (
                <img
                  src={sim.gifPath}
                  alt={sim.name}
                  style={{ width: '300px', height: 'auto', marginTop: '1rem' }}
                />
              ) : (
                <p style={{ color: 'red', marginTop: '1rem' }}>
                  The animation is not generated.
                </p>
              )}
            </ResultCard>
          ))
        )}
      </div>
    </Container>
  )
}

export default UserInfo

