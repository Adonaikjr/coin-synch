import React, { ReactNode, useRef } from 'react'
import { ContainerScrool } from './styled'

interface Props {
  children: ReactNode
}

export function ScroolCarousel({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  function handleScroll(e: React.WheelEvent<HTMLDivElement>) {
    if (containerRef.current) {
      containerRef.current.scrollLeft += e.deltaY
      e.stopPropagation()
    }
  }

  const handleMouseEnter = () => {
    document.body.style.overflow = 'hidden'
  }

  const handleMouseLeave = () => {
    document.body.style.overflow = ''
  }
  return (
    <ContainerScrool
      ref={containerRef}
      onWheel={handleScroll}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </ContainerScrool>
  )
}
