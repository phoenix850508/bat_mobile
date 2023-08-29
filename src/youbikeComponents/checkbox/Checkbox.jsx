import styles from "./Checkbox.module.scss";

export default function Checkbox({ district }) {
  return (
    <div className={styles.CheckboxWrapper}>
      <input className={styles.checkbox} type="checkbox" />
      <span>{district}</span>
    </div>
  );
}
