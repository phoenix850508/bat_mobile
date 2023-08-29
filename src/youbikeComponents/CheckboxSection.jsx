import CitySelector from "./selectboxes/CitySelector";
import StationSearch from "./selectboxes/StationSearch";
import Checkbox from "./checkbox/Checkbox";
import styles from "./CheckboxSection.module.scss";

export default function CheckboxSection() {
  const arr = [
    "松山區",
    "松山區",
    "松山區",
    "松山區",
    "松山區",
    "松山區",
    "松山區",
    "松山區",
    "松山區",
    "松山區",
    "松山區",
  ];
  return (
    <section className={styles.checkboxSection}>
      <div className={styles.title}>站點資訊</div>
      <div className={styles.dropdownMenuWrapper}>
        <CitySelector />
        <StationSearch />
      </div>
      <Checkbox district="全部選取" />
      <div className={styles.checkboxWrapper}>
        {arr.map((district, index) => {
          return <Checkbox key={index} district={district} />;
        })}
      </div>
    </section>
  );
}
