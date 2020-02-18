import React, { useContext } from "react"
import { Context } from "../core/context"
import { useTimer, formatTime } from "../hooks/useTimer"
import { useTasks } from "../hooks/useTasks"
import Circle from "react-circle"
import { EditPencil } from "react-zondicons"

const Timer = () => {
  const { isPlaying } = useContext(Context)
  const [timer, percentage] = useTimer()
  const [tasks, editTaskName] = useTasks()

  return (
    <div className="timer__circle">
      <Circle
        animate={true}
        animationDuration="1s"
        responsive={true}
        size="350"
        lineWidth="15"
        progress={percentage}
        progressColor="#f26387"
        bgColor="#eee"
        textColor="#333"
        percentSpacing={10}
        roundedStroke={true}
        showPercentage={false}
      />

      <div className="timer__circle__time">
        {isPlaying === "FINISHED" ? "Nice!" : formatTime(timer)}
      </div>

      <div className="timer__circle__name">
        <input
          type="text"
          value={tasks[0].name}
          onChange={event => editTaskName(event.target.value)}
        />
        <EditPencil className="timer__circle__edit" size={15} />
      </div>
    </div>
  )
}

export default Timer
