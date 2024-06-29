'use client'
import { panelVariants } from '@/lib/variants'
import { ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export type MapPanelTypes = {
  children?: ReactNode
  className?: string
  variants?: VariantProps<typeof panelVariants>
}

export const Panel = ({ children, className, variants }: MapPanelTypes) => {
  return (
    <div
      className={`absolute space-y-2 p-2 ${panelVariants(variants)} ${className}`}
    >
      {children}
    </div>
  )
}
