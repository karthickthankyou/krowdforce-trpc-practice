'use client'
import { createTRPCReact, httpBatchLink } from '@trpc/react-query'
import { AppRouter } from '../server/routers'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { getUrl } from './shared'

export const trpcClient = createTRPCReact<AppRouter>()

export function TRPCReactProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())
  const [trpc] = useState(() =>
    trpcClient.createClient({
      links: [httpBatchLink({ url: getUrl() })],
    }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <trpcClient.Provider client={trpc} queryClient={queryClient}>
        {children}
      </trpcClient.Provider>
    </QueryClientProvider>
  )
}
