import CheckboxSection from "./CheckboxSection";
import bikesScratch from "icons/bikes_scratch.svg";
import styles from "./Midsection.module.scss";

export default function Midsection({ districtsArrState, stationArrState }) {
  return (
    <section className={styles.main}>
      <CheckboxSection
        districtsArr={districtsArrState}
        stationArrState={stationArrState}
      />
      <img
        className={styles.bikesScratch}
        src={bikesScratch}
        alt="bikesScratch"
      />
    </section>
  );
}
