'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ModeToggle } from '@/components/Client-side/ModeToggle'
import { Menu, X } from 'lucide-react'

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Education', href: '#Education' },
  { title: 'Project', href: '#Project' },
  { title: 'Contact Me', href: '#Contact' },
]

export default function MainNav() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState<string>('/')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
    setLastScrollY(window.scrollY)
  }

  const handleScroll = () => {
    const sectionOffsets = navItems.map((item) => {
      const id = item.href.startsWith('#') ? item.href.slice(1) : ''
      const el = id ? document.getElementById(id) : document.body
      return {
        href: item.href,
        offsetTop: el?.offsetTop || 0,
      }
    })

    const scrollPosition = window.scrollY + window.innerHeight / 3

    let current = '/'
    for (const section of sectionOffsets) {
      if (scrollPosition >= section.offsetTop) {
        current = section.href
      }
    }
    setActiveSection(current)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', controlNavbar)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <header
      className={cn(
        'w-full flex items-center justify-between px-6 py-4 fixed top-0 z-50 transition-transform duration-300 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-neutral-300 dark:border-white/10',
        isVisible ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center w-10 h-10 rounded-full overflow-hidden border border-white/20 dark:border-white/30 shadow-lg"
      >
        <Image
          src="/Logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex flex-1 justify-center">
        <NavigationMenu>
          <NavigationMenuList
            className={cn(
              'py-1 rounded-full backdrop-blur-md shadow-md border',
              'bg-neutral-100/60 dark:bg-white/5',
              'border-neutral-300 dark:border-white/10',
              'flex items-center gap-2'
            )}
          >
            {navItems.map((item, i) => {
              const isActive = activeSection === item.href
              return (
                <NavigationMenuItem key={i}>
                  <Link
                    href={item.href}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                      'text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white',
                      isActive
                        ? 'bg-black/10 dark:bg-white/10 dark:text-white text-black shadow-inner'
                        : 'bg-transparent'
                    )}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="flex sm:hidden items-center justify-center w-10 h-10 text-neutral-700 dark:text-neutral-300"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* ModeToggle always visible */}
      <div className="hidden sm:flex">
        <ModeToggle />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-black flex flex-col items-center gap-4 py-4 shadow-lg sm:hidden">
          {navItems.map((item, i) => {
            const isActive = activeSection === item.href
            return (
              <Link
                key={i}
                href={item.href}
                className={cn(
                  'text-lg font-medium transition-colors',
                  'text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white',
                  isActive ? 'underline underline-offset-4' : ''
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            )
          })}
          <div className="mt-2">
            <ModeToggle />
          </div>
        </div>
      )}
    </header>
  )
}
