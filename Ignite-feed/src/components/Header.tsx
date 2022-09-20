import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src="https://raw.githubusercontent.com/rocketseat-education/ignite-reactjs-01-fundamentos-react/5edd25e735df6c6bf8bfe709c0de00286993147e/src/assets/ignite-logo.svg" alt="Logotipo do Ignite" />
    </header>
  );
}
