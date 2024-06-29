import { createTRPCRouter, publicProcedure } from '..'
import { employeeRoutes } from './employee'
import { employerRoutes } from './employer'

export const appRouter = createTRPCRouter({
  employees: employeeRoutes,
  employers: employerRoutes,
  users: publicProcedure.query(() => prisma?.user.findMany()),
})

export type AppRouter = typeof appRouter
