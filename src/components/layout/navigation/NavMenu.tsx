'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MenuItem } from '@/constants/navigation'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

interface NavMenuProps {
  items: MenuItem[]
}

export function NavMenu({ items }: NavMenuProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title)
  }

  return (
    <div className='relative' ref={dropdownRef}>
      <ul className='space-y-2'>
        {items.map((item) => (
          <li key={item.title} className='relative'>
            {item.submenu ? (
              <>
                <button onClick={() => toggleDropdown(item.title)} className={`flex items-center gap-1 ${pathname === item.path && 'text-primary'} py-2`}>
                  {item.title}
                  <Play size={15} className={cn('transform transition-transform duration-200 ml-1', activeDropdown === item.title ? '-rotate-90 text-primary fill-primary' : 'fill-black text-black rotate-90')} />
                </button>
                {activeDropdown === item.title && (
                  <div className='absolute left-0 top-full mt-2 w-80 bg-[#FFF0D6] backdrop-blur-sm rounded-lg shadow-lg p-4 z-50'>
                    {/* Arrow indicator */}
                    <div className='absolute -top-2 left-4 w-4 h-4 bg-[#FFF0D6] transform rotate-45' />
                    <ul className='space-y-0 relative'>
                      {item.submenu.map((subItem) => {
                        return (
                          <li key={subItem.title}>
                            <Link href={subItem.path} className={`flex items-center pt-2 ${pathname === subItem.path && 'text-primary'} hover:text-primary rounded-md transition-colors fill-white`}>
                              <div className={`w-8 h-8 p-1 mr-2 flex items-center justify-center ${pathname === subItem.path ? 'bg-primary' : 'bg-white'} rounded-full`}>
                                <Image src={subItem.icon as string} width={14} height={14} alt='whatsapp' className={`${pathname === subItem.path ? 'text-white' : 'text-black'}`} />
                              </div>
                              {subItem.title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link href={item.path} className={`block py-2 ${pathname === item.path && 'text-primary'}`}>
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
