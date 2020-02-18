import React, { useContext } from "react"
import { Context } from "../core/context"
import { PlayOutline, PauseOutline, StandBy } from "react-zondicons"

const Controls = () => {
  const { isPlaying, setIsPlaying } = useContext(Context)

  return (
    <div className="timer__controls">
      {isPlaying !== "PLAY" && (
        <span
          className="timer__controls__play"
          onClick={() => setIsPlaying("PLAY")}
        >
          <PlayOutline />
        </span>
      )}
      {isPlaying === "PLAY" && (
        <span
          className="timer__controls__pause"
          onClick={() => setIsPlaying("PAUSE")}
        >
          <PauseOutline />
        </span>
      )}
      <span
        className="timer__controls__stop"
        onClick={() => setIsPlaying("STOP")}
      >
        <StandBy />
      </span>
    </div>
  )
}

export default Controls
