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
          'hover:underline font-black underline-offset-4 text-primary-500 text-xl uppercase tracking-tight bg-clip-text bg-gradient-to-tr from-primary to-transparent via-black text-transparent',
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
