import styles from "../styles/Subdivision.module.css";

export default function Subdivision(props) {
  return (
    <div
      style={{
        backgroundColor: props.negative ? "#f38" : "#3ff",
      }}
      className={styles.subdivision}
    ></div>
  );
}
