'use client'
import { trpcClient } from '@/trpc/clients/client'
import { ReactNode, useEffect } from 'react'
import { OnboardingEmployee } from './OnboardingEmployee'
import { getQueryKey } from '@trpc/react-query'
import { LoaderPanel } from './Loader'

export const IsEmployee = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, isFetched, isError } =
    trpcClient.employees.me.useQuery()

  if (isLoading) {
    return <LoaderPanel />
  }

  if (isFetched && !data) {
    return <OnboardingEmployee />
  }

  return <>{children}</>
}
