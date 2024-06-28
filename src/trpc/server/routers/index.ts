import { createTRPCRouter, protectedProcedure, publicProcedure } from '..'
import { prisma } from '@/db'

export const appRouter = createTRPCRouter({
  users: publicProcedure.query(({ ctx }) => {
    console.log('ctx ', ctx.session.userId)
    return prisma.user.findMany()
  }),
})

export type AppRouter = typeof appRouter
