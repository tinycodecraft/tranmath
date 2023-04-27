'use client'
import React, { useRef, useEffect, useContext } from 'react'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import MenuContext from '../context/MenuContext'
import { MenuItemProps } from './props'
import Link from 'next/link'
import { JsxAttribute } from 'typescript'

export function SideBar({ links }: { links: MenuItemProps[] }) {
  let sidebarMenu = useRef(null)
  let sidebarMenuOverlay = useRef(null)
  let menuLayer = useRef(null)
  const menuTimeline = useRef<GSAPTimeline>()
  const router = useRouter()

  const { closedShow, toggleClosedShow } = useContext(MenuContext)

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true })
    menuTimeline.current.fromTo(
      [sidebarMenuOverlay.current, menuLayer.current, sidebarMenu.current],
      {
        duration: 0,
        x: '100%',
      },
      {
        duration: 0.75,
        x: '0%',
        ease: 'power3.inOut',
        stagger: {
          amount: 0.5,
        },
      },
    )
  }, [menuTimeline])

  useEffect(() => {
    console.log(`the show is ${closedShow}`)
    console.log(menuTimeline)
    if (menuTimeline.current !== undefined) {
      console.log(menuTimeline.current)

      closedShow ? menuTimeline.current.play() : menuTimeline.current.reverse()
    }
  }, [closedShow])

  return (
    <>
      <div className='sidebarNavigationOverlay' ref={sidebarMenuOverlay}>
        <div className='menu-wrapper'>
          <div className='menu-layer' ref={menuLayer}></div>
          <nav className='sidebarNavigation' ref={sidebarMenu}>
            <div className='sidebar-top'>
              <div className='links-wrapper'>
                <Link
                  className='menu-link'
                  href='/'
                  onClick={() => toggleClosedShow && toggleClosedShow(false)}
                >
                  Home
                </Link>
                {links.map((item) => {
                  return (
                    <Link
                      className='menu-link'
                      href={item.href}
                      key={item.href}
                      onClick={() => toggleClosedShow && toggleClosedShow(false)}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default SideBar
