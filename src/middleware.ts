import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// By default, clerkMiddleware will not protect any routes. All routes are public and you must opt-in to protection for routes.
// Add protected routes in the below array.
const isProtectedRoute = createRouteMatcher([])

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect()
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
