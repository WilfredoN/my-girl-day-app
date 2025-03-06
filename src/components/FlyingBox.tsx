import { motion, useAnimationControls } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import npBox from '../assets/np_box.png'

interface FlyingBoxProps {
  initialX: number
  initialY: number
  speed?: number
}

let currentDigitIndex = 0
const trackingNumber = '080806'

export const FlyingBox = ({ initialX, initialY, speed = 1 }: FlyingBoxProps) => {
  const controls = useAnimationControls()
  const [emittedDigit, setEmittedDigit] = useState<string | null>(null)
  const [emitAnimation, setEmitAnimation] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [screenHeight, setScreenHeight] = useState(window.innerHeight)
  const positionRef = useRef({ x: initialX, y: initialY })
  const [digitPosition, setDigitPosition] = useState({ x: initialX, y: initialY })
  const [isFalling, setIsFalling] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
      setScreenHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let animationFrameId: number
    const angle = Math.random() * Math.PI * 2
    const velocity = 1 * speed

    let fallingVelocityY = 0
    const fallingVelocityX = Math.random() * 4 - 2
    const gravity = 0.5
    const rotationSpeed = (Math.random() - 0.5) * 10
    let rotation = 0
    const animate = () => {
      if (isFalling) {
        fallingVelocityY += gravity

        const nextX = positionRef.current.x + fallingVelocityX
        const nextY = positionRef.current.y + fallingVelocityY

        rotation += rotationSpeed

        if (nextY > screenHeight) {
          setTimeout(() => {
            setIsVisible(false)
          }, 5000)
          return
        }

        positionRef.current = { x: nextX, y: nextY }

        controls.set({
          x: nextX,
          y: nextY,
          rotate: rotation,
        })
      } else {
        let nextX = positionRef.current.x + Math.cos(angle) * velocity
        let nextY = positionRef.current.y + Math.sin(angle) * velocity

        if (nextX < -64) nextX = screenWidth
        if (nextX > screenWidth) nextX = -64
        if (nextY < -64) nextY = screenHeight
        if (nextY > screenHeight) nextY = -64

        positionRef.current = { x: nextX, y: nextY }

        controls.set({
          x: nextX,
          y: nextY,
          scaleX: Math.cos(angle) < 0 ? -1 : 1,
        })
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [controls, speed, screenWidth, screenHeight, isFalling, isVisible])

  const handleClick = () => {
    if (!isFalling) {
      const digit = trackingNumber[currentDigitIndex]
      setEmittedDigit(digit)
      setEmitAnimation(true)
      setDigitPosition({ x: positionRef.current.x, y: positionRef.current.y })
      currentDigitIndex = (currentDigitIndex + 1) % trackingNumber.length

      setIsFalling(true)
    }
  }

  if (!isVisible) return null

  return (
    <div className="absolute" style={{ left: 0, top: 0 }}>
      <motion.img
        src={npBox}
        alt="Nova Poshta Box"
        animate={controls}
        draggable={false}
        className="h-16 w-16 cursor-pointer"
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        initial={{ x: initialX, y: initialY, scaleX: 1 }}
      />
      {emitAnimation && emittedDigit && (
        <motion.div
          className="absolute text-3xl font-bold text-[#da292b]"
          initial={{
            x: digitPosition.x,
            y: digitPosition.y,
          }}
          animate={{
            x: digitPosition.x,
            y: digitPosition.y - 1000,
          }}
          transition={{
            duration: 5,
            ease: 'easeOut',
          }}
        >
          {emittedDigit}
        </motion.div>
      )}
    </div>
  )
}
