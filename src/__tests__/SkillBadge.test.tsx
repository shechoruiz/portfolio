import { render, screen } from '@testing-library/react'
import SkillBadge from '../components/SkillBadge'

describe('SkillBadge', () => {
  it('renders skill name', () => {
    render(<SkillBadge name="React" category="Frontend" />)
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('applies badge-outline class', () => {
    render(<SkillBadge name="TypeScript" category="Frontend" />)
    const badge = screen.getByText('TypeScript')
    expect(badge).toHaveClass('badge-outline')
    expect(badge).toHaveClass('rounded-pill')
  })

  it('renders multiple skills without category affecting class', () => {
    const { container } = render(
      <div>
        <SkillBadge name="Node.js" category="Backend & Cloud" />
        <SkillBadge name="Git" category="Tools" />
      </div>,
    )
    expect(container.querySelectorAll('.badge-outline')).toHaveLength(2)
  })
})
