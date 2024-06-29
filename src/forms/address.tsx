import { z } from 'zod'

export const schemaCreateAddress = z.object({
  lat: z.number(),
  lng: z.number(),
  address: z.string().min(1, 'Please enter the address'),
})

export type FormTypeCreateAddress = z.infer<typeof schemaCreateAddress>
