import React, { createContext } from 'react'
import { useState } from 'react'

interface TransitionContextProps {
  toggleCompleted?: (value: boolean) => void
  completed: boolean
}
const TransitionContext = createContext<TransitionContextProps>({ completed: false })

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const [completed, setCompleted] = useState(false)

  const toggleCompleted = (value: boolean) => {
    setCompleted(value)
  }

  return (
    <TransitionContext.Provider
      value={{
        toggleCompleted,
        completed,
      }}
    >
      {children}
    </TransitionContext.Provider>
  )
}

export default TransitionContext
