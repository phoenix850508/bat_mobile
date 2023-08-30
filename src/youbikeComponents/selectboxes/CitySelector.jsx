import arrowDown from "icons/arrow_down.svg";
import { useState, useRef, useContext } from "react";
import clsx from "clsx";
import { SelectedCity } from "context/SelectedCityContext";
import styles from "./CitySelector.module.scss";

export default function CitySelector() {
  const cities = [
    "台北市",
    "新北市",
    "桃園市",
    "新竹市",
    "新竹縣",
    "新竹科學園區",
    "苗栗縣",
    "臺中市",
    "嘉義市",
    "臺南市",
    "高雄市",
    "屏東縣",
    "莆田市",
    "泉州市",
  ];
  const [selectedCity, setSelectedCity] = useState("選擇城市");
  const isSelectedRef = useRef(false);
  const { dispatch } = useContext(SelectedCity);

  return (
    <div className={styles.citySelectorWrapper}>
      <input
        type="checkbox"
        id="selectToggle"
        className={styles.selectToggle}
      />
      <label className={styles.label} htmlFor="selectToggle">
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
                  dispatch({ type: "changeCity", city });
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
