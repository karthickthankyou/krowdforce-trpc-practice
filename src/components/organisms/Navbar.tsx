import React from 'react'
import { Brand } from '../molecules/Brand'
import { Container } from '../atoms/container'
import { Sidebar } from './Sidebar'
import { UserButton } from '@clerk/nextjs'
import { NavMenu } from '../molecules/NavMenu'

export interface INavbarProps {}

export const Navbar: React.FC<INavbarProps> = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur backdrop-filter">
      <Container className="h-12">
        <div className="flex items-center justify-between h-full relative">
          <div className="absolute right-0 flex items-center gap-3">
            <UserButton />
            <Sidebar />
          </div>
          <div className="flex-grow flex justify-center">
            <Brand />
          </div>
        </div>
      </Container>
    </nav>
  )
}
