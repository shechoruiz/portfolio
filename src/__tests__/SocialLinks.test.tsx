import { render, screen } from '@testing-library/react'
import SocialLinks from '../components/SocialLinks'

describe('SocialLinks', () => {
  it('renders GitHub link', () => {
    render(<SocialLinks />)
    const link = screen.getByLabelText('GitHub')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders LinkedIn link', () => {
    render(<SocialLinks />)
    const link = screen.getByLabelText('LinkedIn')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
