import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { RouterProvider } from 'react-router-dom'
import styled from 'styled-components'
import theme from './theme'
import router from './routes'

const AppContainer = styled(Box)`
  display: flex;
`

const CurrentScreen = styled(Box)`
  width: calc(100% - 240px);
  margin-left: 240px;
`

const App = () => {
  // Do some stuff here
  return (
    <ThemeProvider theme={theme}>
      <AppContainer as="main">
        <CurrentScreen as="section">
          <RouterProvider router={router} />
        </CurrentScreen>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
