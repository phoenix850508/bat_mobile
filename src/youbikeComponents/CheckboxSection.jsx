import CitySelector from "./selectboxes/CitySelector";
import StationSearch from "./selectboxes/StationSearch";
import Checkbox from "./checkbox/Checkbox";
import styles from "./CheckboxSection.module.scss";

export default function CheckboxSection({ districtsArr, stationArrState }) {
  return (
    <section className={styles.checkboxSection}>
      <div className={styles.title}>站點資訊</div>
      <div className={styles.dropdownMenuWrapper}>
        <CitySelector />
        <StationSearch stationArrState={stationArrState} />
      </div>
      <Checkbox district="全部選取" />
      <div className={styles.checkboxWrapper}>
        {districtsArr &&
          districtsArr.map((district, index) => {
            return <Checkbox key={index} district={district} />;
          })}
      </div>
    </section>
  );
}
