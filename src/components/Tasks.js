import React from "react"
import { useTasks } from "../hooks/useTasks"
import { formatTime } from "../hooks/useTimer"
import { HourGlass, ListAdd } from "react-zondicons"

const Tasks = ({ isTaskListOpen, addTask }) => {
  const [tasks] = useTasks()

  let list = []

  if (tasks.length) {
    list = tasks.map(({ id, name, focus }) => (
      <li key={id}>
        <span>{name}</span>
        <span>
          <HourGlass />
          {formatTime(focus)}'
        </span>
      </li>
    ))
  }

  return (
    <>
      <div className={`tasks ${isTaskListOpen ? "tasks--opened" : ""}`}>
        <ul>{list}</ul>
      </div>
      <div className="addTask">
        <ListAdd onClick={() => addTask(true)} />
      </div>
    </>
  )
}

export default Tasks
