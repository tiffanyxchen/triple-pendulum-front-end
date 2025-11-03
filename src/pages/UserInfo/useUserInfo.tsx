import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function useUserInfo() {
  const {
    isLoading: ordersAreLoading,
    error: ordersErrors,
    data: orderData,
  } = useQuery({
    queryKey: ['orderData'],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/v1/orders`)
        .then((res) => res.data),
  })

  const {
    isLoading: userIsLoading,
    error: userErrors,
    data: userData,
  } = useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/v1/users`)
        .then((res) => res.data),
  })

  return {
    ordersAreLoading,
    ordersErrors,
    orderData,
    userIsLoading,
    userErrors,
    userData,
  }
}

export default useUserInfo
