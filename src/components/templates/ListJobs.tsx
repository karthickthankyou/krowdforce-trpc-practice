'use client'
import { trpcClient } from '@/trpc/clients/client'
import { JobCard } from '../organisms/JobCard'
import { AlertSection } from '../molecules/AlertSection'

export const ListJobs = () => {
  const { data, isLoading, error } = trpcClient.employers.myJobs.useQuery()
  if (data?.length === 0) {
    return <AlertSection>No results</AlertSection>
  }
  return (
    <div className="flex flex-col gap-2">
      {data?.map((job) => <JobCard job={job} key={job.id} />)}
    </div>
  )
}
