'use client'
import { HeroCard } from '@/components/organisms/HeroCard'
import { trpcClient } from '@/trpc/clients/client'
import { getQueryKey } from '@trpc/react-query'

const employerData = {
  title: 'Find the Best Candidates',
  image: '/employer.jpeg', // Replace with your image path
  description:
    'Search for skilled and reliable job seekers in your area. Post jobs and connect with top talent effortlessly.',
  link: '/employer', // Replace with your link
  linkText: 'Find Employees',
}

const employeeData = {
  title: 'Discover Your Next Opportunity',
  image: '/employee.jpeg', // Replace with your image path
  description:
    'Explore job openings near you for teaching, driving, and security roles. Apply for positions and start your new career today.',
  link: '/employee', // Replace with your link
  linkText: 'Find Jobs',
}

export default function Home() {
  const queryKey = getQueryKey(trpcClient.employees.me)
  console.log('queryKey', queryKey)
  return (
    <main className="flex flex-col md:flex-row justify-center items-center md:items-stretch mt-12 gap-2">
      <HeroCard
        {...employerData}
        classname=" skew-y-0 hover:skew-y-3 origin-top-right"
      />
      <HeroCard
        {...employeeData}
        classname="skew-y-0 hover:-skew-y-3 origin-top-left"
      />
    </main>
  )
}
