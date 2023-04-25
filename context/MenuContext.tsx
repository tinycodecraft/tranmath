'use client'
import React, { createContext } from 'react'
import { useState } from 'react'

interface MenuContextProps {
  toggleClosedShow?: (value: boolean) => void
  closedShow: boolean
}
const MenuContext = createContext<MenuContextProps>({ closedShow: false })

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [closedShow, setClosedShow] = useState(false)

  const toggleClosedShow = (value: boolean) => {
    setClosedShow(value)
  }

  return (
    <MenuContext.Provider
      value={{
        toggleClosedShow,
        closedShow,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
