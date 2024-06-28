'use client'
import { HeroCard } from '@/components/organisms/HeroCard'
import { trpcClient } from '@/trpc/clients/client'

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
  const { data, isError, isLoading, error } = trpcClient.users.useQuery()

  return (
    <main className="flex justify-center mt-12 gap-2">
      <HeroCard
        {...employerData}
        classname=" skew-y-0 hover:skew-y-6 origin-top-right"
      />
      <HeroCard
        {...employeeData}
        classname="skew-y-0 hover:-skew-y-6 origin-top-left"
      />
    </main>
  )
}
