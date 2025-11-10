import { ReactNode } from "react"

export type ButtonProps = {
  title: string
  to?: string
  disabled?: boolean
  variant?: 'filled' | 'outlined'
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  children?: ReactNode
}
