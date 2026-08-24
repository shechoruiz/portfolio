import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Routes, Route, Link } from 'react-router-dom'
import ScrollToTopOnChange from '../components/ScrollToTopOnChange'

function renderWithRouter() {
  return render(
    <MemoryRouter initialEntries={['/about']}>
      <ScrollToTopOnChange />
      <Routes>
        <Route path="/" element={<Link to="/about">to-about</Link>} />
        <Route path="/about" element={<Link to="/">to-home</Link>} />
      </Routes>
    </MemoryRouter>,
  )
}

describe('ScrollToTopOnChange', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn()
  })

  it('scrolls to top on initial render', () => {
    renderWithRouter()
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
  })

  it('scrolls to top when navigating to a different route', async () => {
    const user = userEvent.setup()
    renderWithRouter()
    ;(window.scrollTo as ReturnType<typeof vi.fn>).mockClear()

    await user.click(screen.getByText('to-home'))

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
  })

  it('scrolls to top when re-clicking a link for the active route', async () => {
    const user = userEvent.setup()
    renderWithRouter()
    ;(window.scrollTo as ReturnType<typeof vi.fn>).mockClear()

    // /about is already active; navigating to the same path must still scroll
    await user.click(screen.getByText('to-home'))
    await user.click(screen.getByText('to-about'))

    expect(window.scrollTo).toHaveBeenCalledTimes(2)
  })
})
