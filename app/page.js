import Terminal from "../components/Terminal";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        jabes.dev:$ <br />{" "}
      </h1>
      <h2>
        {" "}
        <span className={styles.help}>help para iniciar</span>
      </h2>

      <p>
        Navegar al{" "}
        <a href="https://dangos.dev/" target="_blank" rel="noreferrer">
          website principal
        </a>
      </p>

      <Terminal />
    </div>
  );
}
