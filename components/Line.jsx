import styles from "../styles/Line.module.css";
import Subdivision from "./Subdivision";

export default function Line(props) {
  return (
    <div className={styles.line}>
      <Subdivision negative={props.negative} />
      <Subdivision negative={!props.negative} />
      <Subdivision negative={props.negative} />
      <Subdivision negative={!props.negative} />
      <Subdivision negative={props.negative} />
      <Subdivision negative={!props.negative} />
      <Subdivision negative={props.negative} />
      <Subdivision negative={!props.negative} />
    </div>
  );
}
