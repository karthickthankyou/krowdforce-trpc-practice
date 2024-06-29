import { schemaEmployerOnboarding } from '@/forms/employerOnboarding'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '..'

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
})
