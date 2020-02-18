import { useState, useEffect, useContext } from "react"
import { Context } from "../core/context"

export const formatTime = time => {
  const seconds = time % 60
  const minutes = Math.floor((time / 60) % 60)

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}

const convertStringtoTime = string => {
  const parts = string.split(":")
  const minutes = parts[0] * 60

  return parseInt(minutes) + parseInt(parts[1])
}

export const useTimer = () => {
  const { tasks, timer, setTimer, isPlaying, setIsPlaying } = useContext(
    Context
  )

  const focus = convertStringtoTime(tasks[0].focus)
  const breakTime = convertStringtoTime(tasks[0].break)

  const TIME_SLOTS = [focus, breakTime, focus, breakTime]

  const [index, setIndex] = useState(0)
  const [displayTime, setDisplayTime] = useState(formatTime(TIME_SLOTS[index]))
  const [percentage, setPercentage] = useState(0)

  const resetTimer = () => {
    setIndex(0)
    setPercentage(0)
    setTimer(TIME_SLOTS[0])
    setDisplayTime(formatTime(TIME_SLOTS[0]))

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
      setTimer(TIME_SLOTS[index + 1])
    }

    let intervalID

    if (isPlaying) {
      intervalID = setInterval(() => setTimer(timer - 1), 1000)
      setDisplayTime(formatTime(timer))
      setPercentage(((TIME_SLOTS[index] - timer) / TIME_SLOTS[index]) * 100)
    }

    return () => clearInterval(intervalID)
  }, [index, timer, isPlaying, setIsPlaying, setTimer])

  return [displayTime, percentage, isPlaying, setIsPlaying, resetTimer]
}
