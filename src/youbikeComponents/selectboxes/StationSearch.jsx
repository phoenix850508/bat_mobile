import serchIcon from "icons/search_icon.svg";
import { useState, useRef } from "react";
import clsx from "clsx";
import coloredSearchIcon from "icons/colored_search_icon.svg";
import styles from "./StationSearch.module.scss";

export default function StationSearch({ stationArrState }) {
  const [menuItem, setMenuItem] = useState(null);
  const inputTextRef = useRef("");
  const [selectedItem, setSelectedItem] = useState("");
  const [isDropDown, setIsDropDown] = useState(false);
  const [isInputTextColored, setIsInputTextColored] = useState(false);

  // 當文字輸入再input內時，找出站點是否有同樣的字
  const handleInputChange = (e) => {
    inputTextRef.current = e.target.value;
    const filteredStation = stationArrState?.filter((element) =>
      element.includes(e.target.value)
    );
    // 若比對後有相同結果，顯示下拉選單
    if (filteredStation) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }

    // 當輸入值為空，移除menuItem和隱藏dropdownMenu
    if (inputTextRef.current === "") {
      setMenuItem([]);
      setIsDropDown(false);
    } else {
      setMenuItem(filteredStation);
    }

    // 若inputText和menuItem一模一樣時，將inputText染色
    if (filteredStation) {
      for (let i = 0, length = filteredStation.length; i < length; i++) {
        if (filteredStation[i] === inputTextRef.current) {
          setIsInputTextColored(true);
          return;
        }
      }
    }
  };

  return (
    <div className={styles.stationSearchWrapper}>
      <input
        type="text"
        className={clsx(styles.searchbox, {
          [styles.colored]: isInputTextColored,
        })}
        placeholder="搜尋站點"
        onChange={handleInputChange}
        value={inputTextRef.current}
      />
      <img
        className={styles.seachIcon}
        src={isInputTextColored ? coloredSearchIcon : serchIcon}
        alt="serchIcon"
      />
      {/* 若無符合搜尋結果，隱藏下拉選單 */}
      <ul
        className={clsx(styles.dropdownMenu, {
          [styles.hidden]: !isDropDown,
        })}
      >
        {menuItem &&
          menuItem.map((item, index) => {
            return (
              <li
                className={clsx({
                  [styles.menuItemColored]: inputTextRef.current === item,
                })}
                key={index}
                onClick={() => {
                  inputTextRef.current = item;
                  setSelectedItem(item);
                  setIsDropDown(false);
                  setIsInputTextColored(false);
                }}
              >
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
