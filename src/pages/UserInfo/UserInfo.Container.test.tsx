import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import UserInfo from '.'

describe('<UserInfo />', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render the fallback UI when no user is loaded', () => {
    render(<UserInfo />)

    expect(screen.getByText('No user found')).toBeDefined()
  })
})
