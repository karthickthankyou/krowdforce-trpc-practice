import { ReactNode } from 'react'

export type Role = 'employer' | 'employee'

export type BaseComponent = {
  children?: ReactNode
  className?: string
}
