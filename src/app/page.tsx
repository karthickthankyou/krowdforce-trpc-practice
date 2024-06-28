'use client'
import { trpcClient } from '@/trpc/clients/client'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  const { data, isError, isLoading, error } = trpcClient.users.useQuery()

  return (
    <main>
      hello world!!!
      <UserButton />
      {data?.map((user) => (
        <pre key={user.id}>{JSON.stringify(user, null, 2)}</pre>
      ))}
      <div>{error?.message}</div>
    </main>
  )
}
