'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ModeToggle } from '@/components/Client-side/ModeToggle'

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Work', href: '/work' },
  { title: 'Blog', href: '/blog' },
  { title: 'More', href: '/more' },
  { title: 'Book a Call', href: '/book' },
]

export default function MainNav() {
  const pathname = usePathname()

  return (
    <header className="w-full flex items-center justify-between px-8 py-4">
      {/* Logo on the far left */}
      <Link href="/" className="flex items-center md:w-10 md:h-10 rounded-full overflow-hidden 
                          border-white/20 dark:border-white/30 shadow-lg">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={46}
          height={46}
          className="object-contain"
        />
      </Link>

      {/* Centered Navigation */}
      <div className="flex-1 flex justify-center">
        <NavigationMenu>
          <NavigationMenuList
            className={cn(
              'px-2 py-1 rounded-full backdrop-blur-md shadow-md border',
              'bg-neutral-100/60 dark:bg-white/5',
              'border-neutral-300 dark:border-white/10',
              'flex items-center gap-2'
            )}
          >
            {navItems.map((item, i) => {
              const isActive = pathname === item.href

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

      {/* Spacer + Mode Toggle */}
      <div className="w-9" />
      <ModeToggle />
    </header>
  )
}
