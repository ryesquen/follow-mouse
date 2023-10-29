import React, { useEffect, useRef, useState } from 'react'

export const App = () => {
  const [follow, setFollow] = useState(false)
  const mouseRef = useRef(null)

  const handleClick = () => {
    setFollow(!follow)
  }

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e
      const newPosition = { x: clientX, y: clientY }
      if (mouseRef.current) {
        mouseRef.current.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`
      }
    }

    if (follow) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [follow])

  return (
    <>
      <div className='mouse' ref={mouseRef} />
      <button onClick={handleClick}>
        {follow ? 'Desactivar seguir el botón' : 'Activar seguir el botón'}
      </button>
    </>
  )
}
