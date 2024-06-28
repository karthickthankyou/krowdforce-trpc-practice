'use client'
import { trpcClient } from '@/trpc/clients/client'

export default function Home() {
  const { data, isError, isLoading, error } = trpcClient.users.useQuery()

  return (
    <main>
      hello world!!!
      <div>{data?.map((user) => <div key={user.id}>{user.id}</div>)}</div>
    </main>
  )
}
