'use client'
import { IsEmployer } from '@/components/molecules/IsEmployer'
import { SearchCandidates } from '@/components/templates/SearchCandidates'

export default function Page() {
  return (
    <IsEmployer>
      <SearchCandidates />
    </IsEmployer>
  )
}
