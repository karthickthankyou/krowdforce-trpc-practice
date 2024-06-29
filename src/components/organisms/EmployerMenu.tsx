import Link from 'next/link'
import { StyledLink } from '../molecules/StyledLink'

export const EmployerMenu = () => {
  return (
    <>
      <StyledLink href="/employer">Home</StyledLink>
      <StyledLink href="/employer/jobs">Jobs</StyledLink>
      <StyledLink href="/employer/jobs/new" className="pl-6">
        New
      </StyledLink>
      <StyledLink href="/employer/searchCandidates">Candidates</StyledLink>
    </>
  )
}
