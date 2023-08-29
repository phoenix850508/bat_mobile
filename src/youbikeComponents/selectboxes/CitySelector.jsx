import arrowDown from "icons/arrow_down.svg";
import { useState, useRef } from "react";
import clsx from "clsx";
import styles from "./CitySelector.module.scss";

export default function CitySelector() {
  const cities = [
    "台北市",
    "台北市",
    "台北市",
    "台北市",
    "台北市",
    "台北市",
    "台北市",
  ];
  const [selectedCity, setSelectedCity] = useState("選擇城市");
  const isSelectedRef = useRef(false);

  return (
    <div className={styles.citySelectorWrapper}>
      <input
        type="checkbox"
        id="selectToggle"
        className={styles.selectToggle}
      />
      <label htmlFor="selectToggle">
        <div
          className={clsx(styles.citySelector, {
            [styles.selected]: isSelectedRef.current,
          })}
        >
          {selectedCity}
        </div>
        <img className={styles.arrowDown} src={arrowDown} alt="arrow_down" />
      </label>
      <ul className={styles.menuList}>
        {cities.map((city, index) => {
          return (
            <label htmlFor="selectToggle" key={index}>
              <li
                onClick={() => {
                  isSelectedRef.current = true;
                  setSelectedCity(city);
                }}
              >
                {city}
              </li>
            </label>
          );
        })}
      </ul>
    </div>
  );
}
