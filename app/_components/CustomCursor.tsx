"use client"
import { useEffect } from "react"

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor")

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`
        cursor.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (
    <div
      id="custom-cursor"
      className="fixed w-4 h-4 bg-pink rounded-full pointer-events-none z-50"
    ></div>
  )
}

export default CustomCursor
