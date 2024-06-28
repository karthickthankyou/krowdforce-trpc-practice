import { cn } from '@/lib/utils'
import { BaseComponent } from '@/util/types'
import Link from 'next/link'

export const NavMenu = ({ className }: BaseComponent) => {
  return (
    <div className={cn('flex gap-2', className)}>
      <Link href="/employer">Employer</Link>
      <Link href="/employee">Employee</Link>
    </div>
  )
}
