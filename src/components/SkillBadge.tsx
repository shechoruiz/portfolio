import type { SkillCategory } from '../types'

interface SkillBadgeProps {
  name: string
  category: SkillCategory
}

function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="badge badge-outline rounded-pill me-2 mb-2">
      {name}
    </span>
  )
}

export default SkillBadge
