import React, { useState } from "react"
import { Context } from "./core/context"
import Timer from "./components/Timer"
import Controls from "./components/Controls"
import Tasks from "./components/Tasks"
import { ListBullet } from "react-zondicons"
import { STANDARD_SLOTS } from "./hooks/useTimer"
import "./assets/scss/App.scss"

const App = () => {
  const [timer, setTimer] = useState(STANDARD_SLOTS[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 0,
      name: "Task Name",
      time: "25:00",
      break: "5:00"
    }
  ])
  const [isTaskListOpen, setIsTaskListOpen] = useState(false)

  return (
    <div className="app">
      <h1>P0m0d0r0 T1m3r</h1>
      <Context.Provider
        value={{
          timer: timer,
          setTimer: setTimer,
          isPlaying: isPlaying,
          setIsPlaying: setIsPlaying,
          tasks: tasks,
          setTasks: setTasks
        }}
      >
        <div className="timer">
          <Timer />
          <Controls />
          <ListBullet
            className="tasks__toggle"
            onClick={() => setIsTaskListOpen(!isTaskListOpen)}
          />
        </div>
        <Tasks isTaskListOpen={isTaskListOpen} />
      </Context.Provider>
    </div>
  )
}

export default App
