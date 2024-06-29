'use client'
import { trpcClient } from '@/trpc/clients/client'
import { ReactNode, useEffect } from 'react'
import { OnboardingEmployer } from './OnboardingEmployer'
import { getQueryKey } from '@trpc/react-query'
import { LoaderPanel } from './Loader'

export const IsEmployer = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, isFetched, isError } =
    trpcClient.employers.me.useQuery()

  if (isLoading) {
    return <LoaderPanel />
  }

  if (isFetched && !data) {
    return <OnboardingEmployer />
  }

  return <>{children}</>
}
