import styles from "../styles/Home.module.css";
import GameBoard from "../components/GameBoard";
export default function Home() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: "url(./img/bg-retro.gif)",
        backgroundPosition: "center",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
      }}
    >
      <GameBoard />
    </div>
  );
}
