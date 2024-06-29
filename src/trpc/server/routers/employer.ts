import { schemaEmployerOnboarding } from '@/forms/employerOnboarding'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '..'
import { addressWhere } from './dtos/common.input'

export const employerRoutes = createTRPCRouter({
  me: protectedProcedure().query(({ ctx }) => {
    return ctx.db.employer.findUnique({ where: { id: ctx.userId } })
  }),
  onboarding: protectedProcedure()
    .input(schemaEmployerOnboarding)
    .mutation(async ({ ctx, input }) => {
      const { address } = input
      const employerId = ctx.userId

      const newAddress = await ctx.db.address.create({ data: address })

      return ctx.db.employer.create({
        data: { id: employerId, addressId: newAddress.id },
      })
    }),
  searchCandidates: publicProcedure
    .input(addressWhere)
    .query(({ ctx, input }) => {
      const { ne_lat, ne_lng, sw_lat, sw_lng } = input

      return ctx.db.employee.findMany({
        where: {
          address: {
            lat: { lte: ne_lat, gte: sw_lat },
            lng: { lte: ne_lng, gte: sw_lng },
          },
        },
        include: { address: true },
      })
    }),
})
