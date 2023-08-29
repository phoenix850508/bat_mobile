import axios from "axios";

const base_url =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// 取得台北市API資料
export const getTaipeiYouBikeData = async () => {
  try {
    const response = await axios.get(`${base_url}`);
    return response;
  } catch (err) {
    console.log(err);
  }
};
