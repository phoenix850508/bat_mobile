import Header from "youbikeComponents/Header";
import Midsection from "youbikeComponents/Midsection";
import Table from "youbikeComponents/Table";
import { useState, useEffect, useContext } from "react";
import { getTaipeiYouBikeData } from "api/youbike";
import { SelectedCity } from "context/SelectedCityContext";
import { dummyDistrictData } from "youbikeComponents/dummyData/dummyDistrictData";

export default function YoubikePage() {
  const { state } = useContext(SelectedCity);
  const [youBikeData, setyouBikeData] = useState(null);
  const [districtsArrState, setDistrictsArrState] = useState(null);
  const [stationArrState, setStationArrState] = useState(null);
  const districtsArr = [];
  const stationArr = [];

  // 取得台北市YouBike資料
  useEffect(() => {
    const getTaipeiYouBikeDataAsync = async () => {
      const respose = await getTaipeiYouBikeData();
      setyouBikeData(respose);
    };
    if (state === "台北市") {
      getTaipeiYouBikeDataAsync();
    } else {
      // 若選擇城市非台北市，清除YouBike資料，加入行政區假資料
      setyouBikeData(null);
      setDistrictsArrState(dummyDistrictData);
    }
  }, [state]);

  // 取得腳踏車站、行政區
  useEffect(() => {
    // 若行政區不在陣列中，將其加入陣列
    youBikeData &&
      youBikeData.data.forEach((element, index) => {
        // 加入車站
        const stationLength = element.sna.length;
        const apiStation = element.sna.slice(11, stationLength);
        stationArr.push(apiStation);
        // 先加入第一個行政區
        const apiDistr = element.sarea;
        if (index === 0) {
          districtsArr.push(apiDistr);
        }
        // 加入不在陣列中的行政區
        const bool = districtsArr.find((element) => element === apiDistr);
        if (!bool) {
          districtsArr.push(apiDistr);
        }
      });

    setStationArrState(stationArr);
    // 若車站資料為空，加入假資料
    setDistrictsArrState(
      districtsArr.length === 0 ? dummyDistrictData : districtsArr
    );
  }, [youBikeData]);

  return (
    <div>
      <Header />
      <Midsection
        districtsArrState={districtsArrState}
        stationArrState={stationArrState}
      />
      <Table youBikeData={youBikeData} />
    </div>
  );
}
