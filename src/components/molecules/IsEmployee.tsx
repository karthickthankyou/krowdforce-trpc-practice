'use client'
import { trpcClient } from '@/trpc/clients/client'
import { ReactNode, useEffect } from 'react'
import { OnboardingEmployee } from './OnboardingEmployee'
import { getQueryKey } from '@trpc/react-query'
import { LoaderPanel } from './Loader'

export const IsEmployee = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, isFetched, isError } =
    trpcClient.employees.me.useQuery()
  console.log('Hello there.')
  console.log('data, isLoading, isFetched ', data, isLoading, isFetched)

  useEffect(() => {
    console.log('Hello there.')
    console.log('data:', data)
    console.log('isLoading:', isLoading)
    console.log('isFetched:', isFetched)
    console.log('isError:', isError)
  }, [data, isLoading, isFetched, isError])

  if (isLoading) {
    return <LoaderPanel />
  }

  if (isFetched && !data) {
    return <OnboardingEmployee />
  }

  return <>{children}</>
}
