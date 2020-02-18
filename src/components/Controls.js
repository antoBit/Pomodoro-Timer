import React from "react"
import { useTimer } from "../hooks/useTimer"
import { PlayOutline, PauseOutline, StandBy } from "react-zondicons"

const Controls = () => {
  const [, , isPlaying, setIsPlaying] = useTimer()

  return (
    <div className="timer__controls">
      {!isPlaying && (
        <span
          className="timer__controls__play"
          onClick={() => setIsPlaying(true)}
        >
          <PlayOutline />
        </span>
      )}
      {isPlaying && (
        <span
          className="timer__controls__pause"
          onClick={() => setIsPlaying(false)}
        >
          <PauseOutline />
        </span>
      )}
      <span
        className="timer__controls__stop"
        onClick={() => setIsPlaying(false)}
      >
        <StandBy />
      </span>
    </div>
  )
}

export default Controls
