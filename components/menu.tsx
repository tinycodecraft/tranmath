'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import MenuContext from '../context/MenuContext'
import { MenuItemProps } from './props'
import {FaReact } from 'react-icons/fa'
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation'

export default function Menu({children, links, breadname}: {children?: React.ReactNode, links: MenuItemProps[], breadname: string}) {
    const { closedShow,toggleClosedShow  } = useContext(MenuContext)
    const path = usePathname()
  return (
    <header className='flex justify-between fixed top-0 left-0 right-0 m-auto z-10'>
    <div className='brand-icon'>
        <Link href='/' >
            <div className='icon'>
                <FaReact ></FaReact>
            </div>
            <span>{breadname}</span>
        </Link>
        <nav className='flex-grow text-sm'>
        <ul className="[&_li]:ml-4 ml-8 flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="relative flex-grow" href={link.href}>
                  {link.href === path && (
                    <motion.span
                      layoutId="give away"
                      className="absolute left-0 top-full h-[1px] w-full bg-black "
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>        

        </nav>
    </div>
    <div>
      <button type='button' aria-label='close' 
      className={`menu-trigger ${closedShow ? 'menu-close': ''}`}
      onClick={() => toggleClosedShow && toggleClosedShow(!closedShow)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
  )
}
