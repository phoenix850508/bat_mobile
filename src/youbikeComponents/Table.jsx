import { CheckedDistrictContext } from "context/CheckedDistrictContext";
import { SelectedCity } from "context/SelectedCityContext";
import { useState, useContext, useEffect } from "react";
import styles from "./Table.module.scss";

export default function Table({ youBikeData }) {
  const { state } = useContext(SelectedCity);
  const { districtState } = useContext(CheckedDistrictContext);
  const [filteredYouBikeDataArrState, setFilteredYouBikeDataArrState] =
    useState([]);
  const filteredYouBikeDataArr = [];

  useEffect(() => {
    if (youBikeData && state === "台北市" && districtState) {
      // 已勾選行政區長度
      const distriLength = districtState.length;
      const completedDistr = [];
      // 因此當過濾資料數量和勾選行政區一樣，且下一個youBikeData的行政區不是要找的目標時，停止loop
      for (let i = 0, length = youBikeData.data.length; i < length; i++) {
        // 若從youBikeData中找到和勾選的行政區一樣的
        if (
          districtState.find((distr) => distr === youBikeData.data[i].sarea)
        ) {
          // 遇到第一筆一樣的行政區資料 將其加入到completedDistr陣列
          if (filteredYouBikeDataArr.length === 0) {
            completedDistr.push(youBikeData.data[i].sarea);
          }
          // 若遇到新的勾選的行政區資料，將其加入completedDistr陣列
          else {
            if (
              !completedDistr.some(
                (compDistr) => compDistr === youBikeData.data[i].sarea
              )
            ) {
              completedDistr.push(youBikeData.data[i].sarea);
            }
          }
          // 將youBikeData中符合勾選行政區的新資料加入到filteredYouBikeDataArr陣列
          filteredYouBikeDataArr.push(youBikeData.data[i]);
        }
        console.log("completedDistr length", completedDistr.length);
        // 若已找到全部行政區，且目前迭代的行政區非目標行政區時，停止
        if (completedDistr.length === distriLength) {
          const toStop = !districtState.find(
            (distr) => distr === youBikeData.data[i].sarea
          );
          if (toStop) break;
        }
      }
      setFilteredYouBikeDataArrState(filteredYouBikeDataArr);
    }
  }, [districtState, state, youBikeData]);

  console.log(filteredYouBikeDataArrState);

  return (
    <div className={styles.tableWrapper}>
      <table>
        <thead>
          <tr>
            <th>縣市</th>
            <th>區域</th>
            <th>站點名稱</th>
            <th>可借車輛</th>
            <th>可還空位</th>
          </tr>
        </thead>
        <tbody>
          {filteredYouBikeDataArrState.map((element, index) => {
            return (
              <tr key={index}>
                <td>{state}</td>
                <td>{element.sarea}</td>
                <td>{element.ar}</td>
                <td>{element.sbi}</td>
                <td>{element.bemp}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
