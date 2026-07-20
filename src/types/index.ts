export interface Skill {
  name: string
  category: SkillCategory
}

export type SkillCategory = 'Frontend' | 'Backend & Cloud' | 'Tools'

export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  imageUrl?: string
  projectUrl?: string
}

export interface FormFields {
  name: string
  email: string
  message: string
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export interface FormState {
  status: FormStatus
  fields: FormFields
  errors: Partial<Record<keyof FormFields, string>>
}

export interface EmailJSConfig {
  serviceId: string
  templateId: string
  publicKey: string
}

export interface Experience {
  id: string
  role: string
  company: string
  period: string
  highlights: string[]
}
