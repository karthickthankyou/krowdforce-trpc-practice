'use client'
import { IsEmployee } from '@/components/molecules/IsEmployee'
import { SearchJobs } from '@/components/templates/SearchJobs'

export default function Page() {
  return (
    <IsEmployee>
      <SearchJobs />
    </IsEmployee>
  )
}
