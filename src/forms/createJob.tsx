import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const schemaCreateJob = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  contactInfo: z.string().optional(),
  skills: z.string().min(1, 'Skills are required'),
})

export type FormTypeJobSchema = z.infer<typeof schemaCreateJob>

export const useFormJobSchema = () =>
  useForm<FormTypeJobSchema>({
    resolver: zodResolver(schemaCreateJob),
  })
