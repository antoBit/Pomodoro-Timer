import { useState, useEffect, useContext } from "react"
import { Context } from "../core/context"

export const formatTime = time => {
  const seconds = time % 60
  const minutes = Math.floor((time / 60) % 60)

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}

export const convertStringtoTime = string => {
  const parts = string.split(":")
  const minutes = parts[0] * 60

  return parseInt(minutes) + parseInt(parts[1])
}

export const useTimer = () => {
  const { tasks, isPlaying, setIsPlaying } = useContext(Context)
  const [timer, setTimer] = useState(tasks[0].focus)
  const [index, setIndex] = useState(0)
  const [slots, setTimeSlots] = useState([1500, 300, 1500, 300, 1800])
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    let intervalID

    switch (isPlaying) {
      case "PLAY":
        intervalID = setInterval(() => setTimer(timer - 1), 1000)
        setPercentage(((slots[index] - timer) / slots[index]) * 100)

        if (timer <= 0) {
          const next = index < 5 ? index + 1 : 0

          if (next === 0) {
            setIsPlaying("FINISHED")
          } else {
            setTimer(slots[next])
            setIndex(next)
          }
        }
        break

      case "STOP":
        setPercentage(0)
        setIndex(0)
        setTimer(tasks[0].focus)
        break

      case "FINISHED":
      case "PAUSE":
      default:
    }

    return () => clearInterval(intervalID)
  }, [isPlaying, timer])

  useEffect(() => {
    const focus = tasks[0].focus
    const breakTime = tasks[0].break

    setTimeSlots([focus, breakTime, focus, breakTime, 1800])
    setTimer(focus)
  }, [tasks])

  return [timer, percentage]
}
