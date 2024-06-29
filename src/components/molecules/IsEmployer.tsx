'use client'
import { trpcClient } from '@/trpc/clients/client'
import { ReactNode } from 'react'

export const IsEmployer = ({ children }: { children: ReactNode }) => {
  const { data, isLoading } = trpcClient.employers.me.useQuery()

  if (data?.id) {
    return <>{children}</>
  }

  return <div>On boarding...</div>
}
