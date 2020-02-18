import { useContext } from "react"
import { Context } from "../core/context"

export const useTasks = () => {
  const { tasks, setTasks } = useContext(Context)

  const editTaskName = name => {
    let editedTasks = [...tasks]
    editedTasks[0].name = name
    setTasks(editedTasks)
  }

  return [tasks, editTaskName]
}
