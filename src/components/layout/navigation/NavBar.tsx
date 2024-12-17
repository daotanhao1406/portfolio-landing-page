'use client'

import { useState, useRef } from 'react'
import { menuItems } from '@/constants/navigation'
import { MobileNav } from './MobileNav'
import { useClickOutside } from '@/hooks/useClickOutside'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useClickOutside(navRef, () => setIsOpen(false), isOpen)
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/works', label: 'Works' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
  ]
  return (
    <nav ref={navRef} className='w-full top-0 z-50'>
      <div className='px-4 py-6'>
        <div className='max-w-7xl mx-auto relative'>
          <div className='flex justify-between items-center'>
            <div className='flex-1' />

            <div className='hidden lg:flex gap-8 items-center'>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={`${pathname === link.href && 'border-b-2 border-white text-primary'} text-base hover:text-gray-900 transition-colors`}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className='flex-1 flex justify-end items-center gap-4'>
              <Button className='bg-primary text-white hidden lg:flex font-normal text-lg'>
                {`Let's Talk`}
                <ArrowUpRight className='w-6 h-6 transition-colors ml-1' />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <MobileNav items={menuItems} isOpen={isOpen} onClose={() => setIsOpen(false)} onToggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>
    </nav>
  )
}
