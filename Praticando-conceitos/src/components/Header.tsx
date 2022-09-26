import { ChangeEvent, FormEvent, useState } from "react";
import { Rocket } from 'phosphor-react'
import styles from "./Header.module.css";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Rocket/> To<span>do</span>
      </h1>

      <form 
        onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={title}
          onChange={onChangeTitle}
         className={styles.input}/>
        <button 
          type='submit'
          className={styles.button}>
          Criar      
        </button>
      </form>
    </header>
  );
}
