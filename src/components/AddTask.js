import React, { useState } from "react"
import { useTasks } from "../hooks/useTasks"
import { CloseSolid, Checkmark } from "react-zondicons"

const AddTask = ({ close }) => {
  const [name, setName] = useState("")
  const [focus, setFocus] = useState("25:00")
  const [breakTime, setBreakTime] = useState("05:00")
  const [isError, setIsError] = useState(false)
  const [tasks, , addTask] = useTasks()

  const submit = () => {
    if (
      [focus, breakTime].some(
        value => !/^[0-5][0-9]:[0-5][0-9]$/gm.test(value) || name === ""
      )
    ) {
      setIsError(true)
      return
    }

    addTask({
      id: tasks.length,
      name: name,
      focus: focus,
      break: breakTime
    })
    setIsError(false)
    close(false)
  }

  return (
    <div className="modal">
      <div className="modal__inner">
        <p>Add a new task!</p>
        <CloseSolid
          className="modal__inner__close"
          onClick={() => close(false)}
        />
        <div className="modal__inner__form">
          <div className="modal__inner__form__row">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Task #"
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div className="modal__inner__form__row">
            <label htmlFor="focus">Focus time:</label>
            <input
              type="text"
              name="focus"
              value={focus}
              placeholder="mm:ss"
              onChange={event => setFocus(event.target.value)}
            />
          </div>
          <div className="modal__inner__form__row">
            <label htmlFor="break">Break time:</label>
            <input
              type="text"
              name="break"
              value={breakTime}
              placeholder="mm:ss"
              onChange={event => setBreakTime(event.target.value)}
            />
          </div>
          {isError && (
            <div className="modal__inner__form__row--error">
              <p>There are some errors!</p>
            </div>
          )}

          <Checkmark
            className="modal__inner__submit"
            onClick={() => submit()}
          />
        </div>
      </div>
    </div>
  )
}

export default AddTask
