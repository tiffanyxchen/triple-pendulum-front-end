import { createBrowserRouter } from 'react-router-dom'
import UserInfo from './pages/UserInfo'
import SimulatePage from './pages/Simulate/Simulate.Container'

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserInfo />,
  },
  {
    path: '/actions',
    element: <div>Actions go burr</div>,
  },
  {
    path: '/simulate',
    element: <SimulatePage />,
  },
])

export default router
