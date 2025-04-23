"use client"
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from '@/components/Client-side/ModeToggle'
import { Button } from '@/components/ui/button'


const Header = () => {
  return (
    <header className='p-4 mt-4'>
    <nav className="flex items-center justify-between p-4">
      {/* Logo on the Left */}
      <Link href="/">
        <h1 className="text-5xl font-bold font-serif">FB.</h1>
      </Link>

      {/* Links on the Right */}
      <div className="flex space-x-6 font-sans">
        <ModeToggle />

        <Button>
          <Link href="/hello">
          <h1 className='text-2xl'>About</h1>
          </Link>
        </Button>

        <Button>
          <Link href="/hello">
          <h1 className='text-2xl'>Projects</h1>
          </Link>
        </Button>

        <Button>
          <Link href="/hello">
          <h1 className='text-2xl'>Contact</h1>
          </Link>
        </Button>
      </div>
    </nav>
    </header>
  )
}

export default Header
