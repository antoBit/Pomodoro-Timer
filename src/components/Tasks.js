import React from "react"
import { useTasks } from "../hooks/useTasks"
import { HourGlass, AddOutline } from "react-zondicons"

const Tasks = ({ isTaskListOpen }) => {
  const [tasks] = useTasks()

  let list = []

  if (tasks.length) {
    list = tasks.map(({ id, name, time }) => (
      <li key={id}>
        <span>{name}</span>
        <span>
          <HourGlass />
          {time}'
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
        <AddOutline />
      </div>
    </>
  )
}

export default Tasks
