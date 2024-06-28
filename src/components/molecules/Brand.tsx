import Link from 'next/link'

import { DeveloperInfo } from './DeveloperInfo'
import { cn } from '@/lib/utils'

export interface IBrandProps {}

export const Brand = () => {
  return (
    <div className="text-center">
      <Link
        href="/"
        className={cn(
          'hover:underline font-semibold underline-offset-4 text-primary-500 text-xl',
        )}
      >
        Krowdforce
      </Link>
      <div className="flex items-center gap-1 text-xs text-gray-600">
        By Soma & Karthick Ragavendran
      </div>
    </div>
  )
}
