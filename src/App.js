import React, { useState, useEffect } from "react"
import "./assets/scss/App.scss"
import {
  PlayOutline,
  PauseOutline,
  StandBy,
  HourGlass,
  ListBullet
} from "react-zondicons"

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isTaskListOpen, setIsTaskListOpen] = useState(false)

  return (
    <div className="app">
      <h1>P0m0d0r0 T1m3r</h1>
      <div className="timer">
        <div className="timer__circle">
          <div className="timer__circle__time">
            <span>23:15</span>
          </div>

          <div className="timer__circle__name">
            <span>Clean house</span>
          </div>
        </div>

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
        <ListBullet
          className="tasks__toggle"
          onClick={() => setIsTaskListOpen(!isTaskListOpen)}
        />
      </div>

      <div className={`tasks ${isTaskListOpen ? "tasks--opened" : ""}`}>
        <ul>
          <li>
            <span>
              Labore proident ea anim duis cupidatat esse voluptate cupidatat
              quis ex ad ipsum eiusmod.
            </span>
            <span>
              <HourGlass /> 10:00'
            </span>
          </li>
          <li>
            <span>
              Labore proident ea anim duis cupidatat esse voluptate cupidatat
              quis ex ad ipsum eiusmod.
            </span>
            <span>
              <HourGlass /> 10:00'
            </span>
          </li>
          <li>
            <span>
              Labore proident ea anim duis cupidatat esse voluptate cupidatat
              quis ex ad ipsum eiusmod.
            </span>
            <span>
              <HourGlass /> 10:00'
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
