"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

// export interface AutoScrollProps {
//   children: React.ReactNode
//   direction?: "left" | "right"
//   speed?: number
//   className?: string
//   pauseOnHover?: boolean
// }

export function AutoScroll({
  children,
  direction = "left",
  speed = 30,
  className,
  pauseOnHover = true,
}) {
  const containerRef = useRef(null)
  const scrollerRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [needsDuplication, setNeedsDuplication] = useState(false)

  // Check if we need to duplicate content for continuous scrolling
  useEffect(() => {
    if (!scrollerRef.current || !containerRef.current) return

    const checkForDuplication = () => {
      if (scrollerRef.current && containerRef.current) {
        const scrollerWidth = scrollerRef.current.scrollWidth
        const containerWidth = containerRef.current.clientWidth

        // If the content is shorter than the container, we need to duplicate
        // to create a continuous scrolling effect
        setNeedsDuplication(scrollerWidth < containerWidth * 2)
      }
    }

    checkForDuplication()
    setIsInitialized(true)

    // Recheck when window is resized
    window.addEventListener("resize", checkForDuplication)
    return () => window.removeEventListener("resize", checkForDuplication)
  }, [children])

  // Handle the scrolling animation
  useEffect(() => {
    if (!isInitialized || !scrollerRef.current || !containerRef.current) return

    let animationId
    let startTime
    const scrollContainer = containerRef.current
    const scrollContent = scrollerRef.current

    // Calculate the scroll step based on speed (pixels per second)
    const pixelsPerFrame = (speed / 60) * (direction === "left" ? 1 : -1)

    const scroll = (timestamp) => {
      if (!startTime) startTime = timestamp

      if (!isHovering && scrollContainer && scrollContent) {
        // Move the scroll position
        scrollContainer.scrollLeft += pixelsPerFrame

        // Reset scroll position when reaching the end for continuous effect
        if (direction === "left" && scrollContainer.scrollLeft >= scrollContent.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        } else if (direction === "right" && scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = scrollContent.scrollWidth / 2
        }
      }

      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [direction, speed, isHovering, isInitialized])

  return (
    <div
      ref={containerRef}
      className={cn("w-full overflow-x-hidden", className)}
      onMouseEnter={pauseOnHover ? () => setIsHovering(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setIsHovering(false) : undefined}
    >
      <div ref={scrollerRef} className="inline-flex">
        <div className="inline-flex">{children}</div>

        {/* Duplicate content for continuous scrolling if needed */}
        {needsDuplication && <div className="inline-flex">{children}</div>}
      </div>
    </div>
  )
}

