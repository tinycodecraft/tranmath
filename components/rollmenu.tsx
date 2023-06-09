'use client'
import clsx from 'clsx'
import React, { useContext } from 'react'
import { clsxm } from '../context/clsxm'
import MenuContext from '../context/MenuContext'
import { MenuItemProps } from './props'

export default function RollMenu({
  children,
  links,
  breadname,
}: {
  children?: React.ReactNode
  links: MenuItemProps[]
  breadname: string
}) {
  const { currentIndex, closedShow, toggleClosedShow } = useContext(MenuContext)

  return (
    <header className='flex justify-between fixed top-0 left-0 right-0 m-auto z-10 items-center'>
      <div className='inline-block overflow-hidden w-menuWidthWithoutSideButton'>
        <ul className='absolute h-12 flex'>
          {links.map((el, index) => {
            const optionalclass = clsx({ 'translate-x-full': currentIndex != index })
            const elclass = clsxm(optionalclass, ' w-menuWidthWithoutSideButton text-center')

            return (
              <li key={el.label} className='w-menuWidthWithoutSideButton text-center'>
                <span>{el.label}</span>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <button
          type='button'
          aria-label='close'
          className={`menu-trigger ${closedShow ? 'menu-close' : ''}`}
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
