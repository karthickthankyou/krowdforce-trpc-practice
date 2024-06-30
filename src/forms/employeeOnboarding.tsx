import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { ReactNode } from 'react'
import { schemaCreateAddress } from './address'

export const schemaEmployeeOnboarding = z.object({
  address: schemaCreateAddress,
  contactInfo: z.string().min(1, 'Please enter the skills'),
  skills: z.string().min(1, 'Please enter the skills'),
})

export type FormTypeEmployeeOnboarding = z.infer<
  typeof schemaEmployeeOnboarding
>

export const useFormEmployeeOnboarding = () =>
  useForm<FormTypeEmployeeOnboarding>({
    resolver: zodResolver(schemaEmployeeOnboarding),
    defaultValues: {
      address: { address: '', lat: 0, lng: 0 },
    },
  })

export const FormProviderEmployeeOnboarding = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormEmployeeOnboarding()

  return <FormProvider {...methods}>{children}</FormProvider>
}
