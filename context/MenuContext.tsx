'use client'
import React, { createContext } from 'react'
import { useState,useCallback } from 'react'
import {HTMLMotionProps} from 'framer-motion'

interface MenuContextProps {
  toggleClosedShow?: (value: boolean) => void
  closedShow: boolean
  currentIndex: number
  maxLength: number
  direction: -1| 1
  
}
const MenuContext = createContext<MenuContextProps>({ closedShow: false, currentIndex: 0, maxLength: 1, direction: 1 })

export const MenuProvider = ({ children, len =1 }: { children: React.ReactNode } & {len: number}) => {
  const [closedShow, setClosedShow] = useState(false)
  

  const toggleClosedShow = (value: boolean) => {
    setClosedShow(value)
  }
  const [[currentIndex, direction], logCurrentIndex] = useState<[number, -1 | 1]>([0, -1])

  const [maxLength, _] = useState<number>(len)
  const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
  }

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = useCallback(
    (dir: -1 | 1) => {
      logCurrentIndex([wrap(0, maxLength, currentIndex + dir), dir])
    },
    [currentIndex, maxLength],
  )

  const paginateTo = useCallback((index: number) => {
    logCurrentIndex((prevState) => {
      return [index, index > prevState[0] ? 1 : -1]
    })
  }, [])

  const handleDrag = useCallback<NonNullable<HTMLMotionProps<'li'>['onDragEnd']>>(
    (e, { offset, velocity }) => {
      ;(e.target as HTMLLIElement).style.cursor = 'grab'

      const swipe = swipePower(offset.x, velocity.x)

      if (swipe < -1000) {
        paginate(1)
      } else if (swipe > 1000) {
        paginate(-1)
      }
    },
    [paginate],
  )


  return (
    <MenuContext.Provider
      value={{
        toggleClosedShow,
        closedShow,
        direction,
        currentIndex,
        maxLength
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
