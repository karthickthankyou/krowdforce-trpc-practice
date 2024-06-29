import { RouterOutputs } from '@/trpc/clients/types'
import React from 'react'
import { CardTitle, TextDescription } from '../atoms/Typography'
import { Badge } from '../atoms/badge'

interface JobCardProps {
  job: RouterOutputs['employers']['myJobs'][0]
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="p-2">
      <CardTitle>{job.title}</CardTitle>
      <TextDescription>{job.description}</TextDescription>
      <p>Contact: {job.contactInfo}</p>

      <div className="flex gap-1">
        {job.skills.map((skill, index) => (
          <Badge variant={'outline'} key={index}>
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  )
}
