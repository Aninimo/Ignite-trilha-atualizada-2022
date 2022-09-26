import { ClipboardText } from "phosphor-react";
import { ITask } from "../App";
import { Task } from "./Task";

import styles from './Tasks.module.css'

interface Props {
  tasks: ITask[];
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function Tasks({ tasks, onComplete, onDelete }: Props) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div className={styles.right}>
          <p>Tarefas criadas</p>
          <span className={styles.span}>{tasksQuantity}</span>
        </div>

        <div className={styles.left}>
          <p>Concluídas</p>
          <span className={styles.span}>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>

      <div className={styles.tasksCreated}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.clipSection}>
            <ClipboardText 
              size={50} 
              color={"white"}/>
            <div className={styles.text}>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span className={styles.spanText}>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
