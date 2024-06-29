import { schemaEmployerOnboarding } from '@/forms/employerOnboarding'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '..'
import { addressWhere } from './dtos/common.input'
import { schemaCreateJob } from '@/forms/createJob'

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
  myJobs: protectedProcedure().query(({ ctx }) => {
    return ctx.db.job.findMany({
      where: { employerId: ctx.userId },
      include: { skills: true },
    })
  }),
  createJob: protectedProcedure()
    .input(schemaCreateJob)
    .mutation(({ ctx, input: { description, skills, title, contactInfo } }) => {
      const skillConnectOrCreate = skills.split(',').map((skill) => {
        const trimmedSkill = skill.trim()
        return {
          where: { name: trimmedSkill },
          create: { name: trimmedSkill },
        }
      })
      return ctx.db.job.create({
        data: {
          description,
          title,
          employerId: ctx.userId,
          contactInfo,
          skills: { connectOrCreate: skillConnectOrCreate },
        },
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
