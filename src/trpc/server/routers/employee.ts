import { schemaEmployeeOnboarding } from '@/forms/employeeOnboarding'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '..'
import { addressWhere } from './dtos/common.input'
import { z } from 'zod'

export const employeeRoutes = createTRPCRouter({
  me: protectedProcedure().query(async ({ ctx }) => {
    return ctx.db.employee.findUnique({
      where: { id: ctx.userId },
    })
  }),
  onboarding: protectedProcedure()
    .input(schemaEmployeeOnboarding)
    .mutation(async ({ ctx, input }) => {
      const { address, skills } = input
      const employeeId = ctx.userId

      const newAddress = await ctx.db.address.create({ data: address })

      const skillConnectOrCreate = skills.split(',').map((skill) => {
        const trimmedSkill = skill.trim()
        return {
          where: { name: trimmedSkill },
          create: { name: trimmedSkill },
        }
      })

      return ctx.db.employee.create({
        data: {
          addressId: newAddress.id,
          id: employeeId,
          skills: { connectOrCreate: skillConnectOrCreate },
        },
      })
    }),
  searchJobs: publicProcedure.input(addressWhere).query(({ ctx, input }) => {
    const { ne_lat, ne_lng, sw_lat, sw_lng } = input

    return ctx.db.job.findMany({
      where: {
        Employer: {
          address: {
            lat: { lte: ne_lat, gte: sw_lat },
            lng: { lte: ne_lng, gte: sw_lng },
          },
        },
      },
      include: { Employer: { include: { address: true } } },
    })
  }),
  apply: protectedProcedure()
    .input(z.object({ jobId: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.application.create({
        data: { jobId: input.jobId, userId: ctx.userId },
      })
    }),
})
