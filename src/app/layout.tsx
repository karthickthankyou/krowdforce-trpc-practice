import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { TRPCReactProvider } from '@/trpc/clients/client'
import { Container } from '@/components/atoms/container'
import { Navbar } from '@/components/organisms/Navbar'
import { Toaster } from '@/components/molecules/Toaster/Toaster'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Krowdforce | Soma & Karthick',
  description: 'Discover jobs and candidates near you with Krowdforce!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <TRPCReactProvider>
        <html lang="en">
          <body className={cn(inter.className, 'bg-gray-100')}>
            <Navbar />
            <Container>{children}</Container>
            <Toaster />
          </body>
        </html>
      </TRPCReactProvider>
    </ClerkProvider>
  )
}
