import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { RouterProvider } from 'react-router-dom'
import styled from 'styled-components'
import theme from './theme'
import router from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const AppContainer = styled(Box)`
  display: flex;
`

const CurrentScreen = styled(Box)`
  width: calc(100% - 240px);
  margin-left: 240px;
`
const queryClient = new QueryClient()

const App = () => {
  // Do some stuff here
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppContainer as="main">
          <CurrentScreen as="section">
            <RouterProvider router={router} />
          </CurrentScreen>
        </AppContainer>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
