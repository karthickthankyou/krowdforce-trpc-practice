'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export const StyledLink = ({
  children,
  href,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) => {
  const pathname = usePathname()
  const active = pathname === href
  return (
    <Link
      href={href}
      className={`hover:underline underline-offset-4 transition-all ${className} ${active ? 'underline font-semibold' : ''}`}
    >
      {children}
    </Link>
  )
}
