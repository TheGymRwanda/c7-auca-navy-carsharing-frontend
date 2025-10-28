export interface AuthInputProps {
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon?: React.ReactNode
  error?: string
  name?: string
  required?: boolean
}
