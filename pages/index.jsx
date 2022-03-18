import Subdivision from "../components/Subdivision";
import styles from "../styles/Home.module.css";
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
      <Subdivision Onchange={} />
      <Subdivision />
      <Subdivision />
      
    </div>
  );
}
