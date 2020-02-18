import React, { useState } from "react"
import { Context } from "./core/context"
import Timer from "./components/Timer"
import Controls from "./components/Controls"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import { ListBullet } from "react-zondicons"
import "./assets/scss/App.scss"

const STANDARD_SLOTS = [1500, 300, 1500, 300]

const App = () => {
  const [timer, setTimer] = useState(STANDARD_SLOTS[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 0,
      name: "Task Name",
      focus: "25:00",
      break: "05:00"
    }
  ])
  const [isTaskListOpen, setIsTaskListOpen] = useState(false)
  const [isModalOpened, setIsModalOpened] = useState(false)

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
        <Tasks isTaskListOpen={isTaskListOpen} addTask={setIsModalOpened} />
        {isModalOpened && <AddTask close={setIsModalOpened} />}
      </Context.Provider>
    </div>
  )
}

export default App
