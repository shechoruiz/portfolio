export type LocalizedText = { es: string; en: string }

export interface Skill {
  name: string
  category: SkillCategory
}

export type SkillCategory = 'Frontend' | 'Backend & Cloud' | 'Tools'

export interface Project {
  id: string
  title: LocalizedText
  description: LocalizedText
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
  role: LocalizedText
  company: string
  period: LocalizedText
  highlights: LocalizedText[]
}
