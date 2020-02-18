import { useState, useEffect, useContext } from "react"
import { Context } from "../core/context"

export const STANDARD_SLOTS = [1500, 300, 1500, 300]
//export const STANDARD_SLOTS = [3, 1, 3, 1]

export const formatTime = time => {
  const seconds = time % 60
  const minutes = Math.floor((time / 60) % 60)

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}

export const useTimer = () => {
  const { timer, setTimer, isPlaying, setIsPlaying } = useContext(Context)
  const [index, setIndex] = useState(0)
  const [displayTime, setDisplayTime] = useState(
    formatTime(STANDARD_SLOTS[index])
  )
  const [percentage, setPercentage] = useState(0)

  const resetTimer = () => {
    setIndex(0)
    setPercentage(0)
    setTimer(STANDARD_SLOTS[0])
    setDisplayTime(formatTime(STANDARD_SLOTS[0]))

    setTimeout(() => setIsPlaying(false), 300)
  }

  useEffect(() => {
    if (index >= 3 && timer < 0) {
      setIsPlaying(false)
      setDisplayTime("Well done!")
      return
    }

    if (timer < 0 && index < 4) {
      setIndex(index + 1)
      setPercentage(0)
      setTimer(STANDARD_SLOTS[index + 1])
    }

    let intervalID

    if (isPlaying) {
      intervalID = setInterval(() => setTimer(timer - 1), 1000)
      setDisplayTime(formatTime(timer))
      setPercentage(
        ((STANDARD_SLOTS[index] - timer) / STANDARD_SLOTS[index]) * 100
      )
    }

    return () => clearInterval(intervalID)
  }, [index, timer, isPlaying, setIsPlaying, setTimer])

  return [displayTime, percentage, isPlaying, setIsPlaying, resetTimer]
}
