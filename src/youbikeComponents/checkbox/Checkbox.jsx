import styles from "./Checkbox.module.scss";

export default function Checkbox({
  district,
  onCheckboxClick,
  isChecked,
  onChange,
}) {
  return (
    <div className={styles.CheckboxWrapper}>
      <input
        className={styles.checkbox}
        type="checkbox"
        name={district}
        onClick={(e) => onCheckboxClick?.(e)}
        checked={isChecked}
        onChange={onChange}
      />
      <span>{district}</span>
    </div>
  );
}
