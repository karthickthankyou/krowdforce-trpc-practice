import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { ReactNode } from 'react'
import { schemaCreateAddress } from './address'

export const schemaEmployerOnboarding = z.object({
  address: schemaCreateAddress,
})

export type FormTypeEmployerOnboarding = z.infer<
  typeof schemaEmployerOnboarding
>

export const useFormEmployerOnboarding = () =>
  useForm<FormTypeEmployerOnboarding>({
    resolver: zodResolver(schemaEmployerOnboarding),
    defaultValues: {
      address: { address: '', lat: 0, lng: 0 },
    },
  })

export const FormProviderEmployerOnboarding = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormEmployerOnboarding()

  return <FormProvider {...methods}>{children}</FormProvider>
}
