import CitySelector from "./selectboxes/CitySelector";
import StationSearch from "./selectboxes/StationSearch";
import Checkbox from "./checkbox/Checkbox";
import { CheckedDistrictContext } from "context/CheckedDistrictContext";
import { SelectedStationContext } from "context/SelectedStationContext";
import { useState, useContext } from "react";
import styles from "./CheckboxSection.module.scss";

export default function CheckboxSection({ districtsArr, stationArrState }) {
  const { districtState, districtDispatch } = useContext(
    CheckedDistrictContext
  );
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const { station, selectedStationDispatch } = useContext(
    SelectedStationContext
  );

  // 當checkbox被點擊時
  const handleDistrictClick = (e) => {
    // 若checkbox為打勾狀態，將該行政區加入到CheckedDistrictContext
    if (e.target.checked) {
      districtDispatch({
        type: "checked_district",
        districts: e.target.name,
      });
      // 若checkbox為取消打勾狀態，將該行政區從CheckedDistrictContext移除
    } else if (!e.target.checked) {
      districtDispatch({
        type: "unchecked_district",
        districts: e.target.name,
      });
    }

    // 當點擊checkbox時，將station清除
    selectedStationDispatch({
      type: "select_station",
      station: "",
    });
  };

  console.log("station", station);

  // 當全部選取被點擊時
  const handleCheckAllDistrict = (e) => {
    setIsCheckedAll(!isCheckedAll);
    // 若checkbox為打勾狀態 將所有district props加入CheckedDistrictContext
    if (e.target.checked) {
      districtDispatch({
        type: "checked_all",
        districts: districtsArr,
      });
      // 若checkbox為取消打勾狀態 回傳空陣列
    } else if (!e.target.checked) {
      districtDispatch({
        type: "unchecked_all",
      });
    }

    // 當點擊checkbox時，將station清除
    selectedStationDispatch({
      type: "select_station",
      station: "",
    });
  };

  return (
    <section className={styles.checkboxSection}>
      <div className={styles.title}>站點資訊</div>
      <div className={styles.dropdownMenuWrapper}>
        <CitySelector />
        <StationSearch stationArrState={stationArrState} />
      </div>
      <Checkbox district="全部選取" onCheckboxClick={handleCheckAllDistrict} />
      <div className={styles.checkboxWrapper}>
        {districtsArr &&
          districtsArr?.map((district, index) => {
            return (
              <Checkbox
                key={index}
                district={district}
                onCheckboxClick={handleDistrictClick}
                // 若context中的行政區包括該行政區，讓該checkbox為打勾，否則取消
                isChecked={districtState.some(
                  (contextDistr) => contextDistr === district
                )}
                onChange={(e) => {
                  // 若context中的行政區包括該行政區，讓該checkbox為打勾，否則取消
                  const bool = districtState.some(
                    (contextDistr) => contextDistr === district
                  );
                  if (bool) {
                    e.target.checked = true;
                  } else {
                    e.target.checked = false;
                  }
                }}
              />
            );
          })}
      </div>
    </section>
  );
}
