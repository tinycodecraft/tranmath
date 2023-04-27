'use client'
import React, { useContext } from 'react'
import CarouselContext from '../context/CarouselContext'
import { ImageItemProps } from './props'
import { motion,AnimatePresence,MotionProps } from 'framer-motion'


const animation: MotionProps = {
    variants: {
      enter: (direction: number) => ({
        scale: 0.5,
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0
      }),
      show: { scale: 1, x: 0, opacity: 1 },
      exit: (direction: number) => ({
        scale: 0.8,
        x: direction < 0 ? "100%" : "-100%",
        opacity: 0
      })
    },
    transition: {
      x: { type: "spring", stiffness: 50, mass: 0.5, bounce: 0 },
      opacity: { duration: 0.2 }
    },
    initial: "enter",
    animate: "show",
    exit: "exit",
    drag: "x",
    dragConstraints: { left: 0, right: 0 },
    dragElastic: 1
  };
  

export default function RollImage({ links }: { links: ImageItemProps[] }) {
  const { currentIndex, direction, paginate, paginateTo, handleDrag } = useContext(CarouselContext)
  return (
    <div>
      <div className='controls'>
        <button className='control-button' onClick={() => paginate && paginate(-1)}>
          ←
        </button>
        {links.map((_, index) => (
          <div className='controls__item' key={index}>
            <button
              className='control-button bullet'
              onClick={() => paginateTo && paginateTo(index)}
              disabled={index === currentIndex}
            >
              {index + 1}
            </button>
            {index === currentIndex && <motion.div className='indicator' layoutId='indicator' />}
          </div>
        ))}
        <button className='control-button' onClick={() => paginate && paginate(1)}>
          →
        </button>
      </div>
      <div className="slider">
          <AnimatePresence custom={direction} initial={false}>
            <motion.img
              key={currentIndex}
              {...animation}
              custom={direction}
              onDragStart={(e) =>
                ((e.target as HTMLDivElement).style.cursor = "grabbing")
              }
              onDragEnd={handleDrag}
              className="slide"
              src={links[currentIndex].href}
              alt=""
            />
          </AnimatePresence>
        </div>      
    </div>
  )
}
