import CheckboxSection from "./CheckboxSection";
import bikesScratch from "icons/bikes_scratch.svg";
import styles from "./Midsection.module.scss";

export default function Midsection() {
  return (
    <section className={styles.main}>
      <CheckboxSection />
      <img
        className={styles.bikesScratch}
        src={bikesScratch}
        alt="bikesScratch"
      />
    </section>
  );
}
