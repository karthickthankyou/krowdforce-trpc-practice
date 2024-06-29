import { BaseComponent } from '@/util/types'

export const PageTitle = ({ children, className }: BaseComponent) => (
  <div className={`font-bold text-black text-lg ${className}`}>{children}</div>
)
export const CardTitle = ({ children, className }: BaseComponent) => (
  <div className={`font-medium text-black text-lg ${className}`}>
    {children}
  </div>
)
export const TextDescription = ({ children, className }: BaseComponent) => (
  <div className={`text-gray-600 text-sm ${className}`}>{children}</div>
)
