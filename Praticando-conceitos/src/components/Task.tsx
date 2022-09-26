import { Circle, CheckCircle, Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface Props {
  task: ITask;
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function Task({task, onComplete, onDelete}: Props){
  return(
    <div className={styles.container}>
      <span
        onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <CheckCircle
    color={"white"}/> : <Circle color={"var(--blue)"}/>}
      </span>
      <p>
        {task.title}
      </p>
      <span onClick={() => onDelete(task.id)}>
        <Trash color={"gray"}/>
      </span>
    </div>
  )
}
