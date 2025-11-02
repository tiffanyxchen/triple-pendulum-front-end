import styled from 'styled-components'
import { useEffect } from 'react'
import { useErrorBoundary } from 'react-error-boundary'
import CircularProgress from '@mui/material/CircularProgress'
import { useSnapshot } from 'valtio'

import useUserInfo from './useUserInfo'
import Header from '../../components/Header/Header'
import {simulationStore} from './UserInfo.State'
import {userStore} from './UserInfo.State'

const Container = styled.div`
  border: 20px solid #808080;
  height: 100vh;
  width: 100%;
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
    if (orderData) simulationStore.results = orderData
  }, [orderData])

  useEffect(() => {
    if (userData) userStore.user = userData
  }, [userData])

  // Handle search bar callback
  const onSubmitSearch = (searchText: string) => {
    console.log("Search for:", searchText)
    // Add filtering or navigation here later
  }

  // Top-level loading state
  if (userIsLoading || ordersAreLoading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    )
  }

  // Top-level errors
  if (userErrors || ordersErrors) {
    showBoundary(userErrors || ordersErrors)
    return null
  }

  // If user hasn't loaded yet, avoid crash
  if (!userSnap.user) {
    return <Container>No user found</Container>
  }

  return (
    <Container>
      <Header
        userName={userSnap.user.name}
        onSubmitSearch={onSubmitSearch}
      />

      <div style={{ marginTop: "2rem" }}>
        <h2>Saved Orders (or Results)</h2>

        {ordersAreLoading ? (
          <CircularProgress color="secondary" />
        ) : (
          orderSnap.results?.map((order) => (
            <div key={order.id}>
              Order #{order.id}
            </div>
          ))
        )}
      </div>
    </Container>
  )
}

export default UserInfo
