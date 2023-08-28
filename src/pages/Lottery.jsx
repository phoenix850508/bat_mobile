import { useState } from "react";

// 抽抽樂總共有五種獎項, 1,2 獎各只有一個, 3 獎有 2 個，4 獎有 5 個，5 獎有 11 個，請寫出一個程式可以「隨機」的取得「不重複」的禮物，

// 且：
// 1 獎中獎機率為 0.1%
// 2 獎中獎機率為 2.3%
// 3 獎中獎機率為 13%
// 4 獎中獎機率為 18%
// 5 獎中獎機率為 25%
let prizies = [
  { level: 1, count: 1, probability: 0.001 },
  { level: 2, count: 1, probability: 0.023 },
  { level: 3, count: 2, probability: 0.13 },
  { level: 4, count: 5, probability: 0.18 },
  { level: 5, count: 11, probability: 0.25 },
];

export default function Lottery() {
  const [message, setMessage] = useState(
    "歡迎蒞臨本次抽獎活動，請按下方按鈕抽獎"
  );
  const [remainPrizeMsg, setRemainPrizeMsg] = useState(null);
  const [alertStyle, setAlertStyle] = useState("alert alert-info mb-3");
  let cumulativePropability = 0;
  // 初始化prizies 淘汰數量為0的獎項
  prizies = eliminateZeros(prizies);

  const handleClick = () => {
    let won = false;
    // 確保所有獎項都還有數量
    if (!isPrizeExist(prizies)) {
      setMessage("獎項已抽完 謝謝參與抽獎活動");
      setAlertStyle("alert alert-warning mb-3");
      setRemainPrizeMsg(null);
    }
    const remainPrizies = [];
    let remainCount = countPrizeNum(prizies);
    // 產生隨機號碼
    const randomNumber = Math.random();
    let index = 0;
    console.log("randomNumber", randomNumber);
    for (let prize of prizies) {
      // 當loop過每一個獎項，累積該獎項的中獎機率
      cumulativePropability += prize.probability;
      // 如果累積的機率高於隨機號碼
      if (randomNumber <= cumulativePropability) {
        // 則會順利讓使用者抽取該獎項
        const winPrize = prize;
        // 將得到獎項的數量 - 1
        prize.count--;

        // 若獎項的數量歸零，將獎項排除
        if (winPrize.count === 0) {
          prizies.splice(index, 1);
        }
        // 將中獎機率歸零
        cumulativePropability = 0;

        // 顯示中獎項目
        setMessage(`恭喜抽到 ${winPrize.level} 號獎 `);
        setAlertStyle("alert alert-success mb-3");
        if (prizies.length === 0) {
          setMessage("獎項已抽完 謝謝參與抽獎活動");
          setRemainPrizeMsg(null);
          break;
        }
        prizies.forEach((prize) => {
          remainPrizies.push(prize.level);
        });
        // 若獎項尚有名額
        setRemainPrizeMsg(
          `目前還有 ${[remainPrizies]} 獎 共${remainCount - 1}名額`
        );
        won = true;
        break;
      }
      index++;
    }
    // for loop一次過後若沒有中獎 顯示摃龜
    if (!won && prizies.length > 0) {
      prizies.forEach((prize) => {
        remainPrizies.push(prize.level);
      });
      setMessage(`可惜沒有中獎，請再接再勵`);
      setRemainPrizeMsg(`目前還有 ${[remainPrizies]} 獎 共${remainCount}名額`);
      setAlertStyle("alert alert-warning mb-3");
    }
  };
  return (
    <div className="pt-5 position-relative">
      <div className={alertStyle} role="alert">
        {message} {remainPrizeMsg}
      </div>
      {prizies.length > 0 ? (
        <button type="button" className="btn btn-success" onClick={handleClick}>
          抽獎
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success disabled"
          onClick={handleClick}
        >
          抽獎
        </button>
      )}
      <a className="position-absolute top-0 end-0" href="/">
        返回首頁
      </a>
    </div>
  );
}

// 確保所有獎項中，至少有一個count > 0
function isPrizeExist(allprizies) {
  if (allprizies.length === 0) {
    return false;
  }
  for (let prize of allprizies) {
    if (prize.count > 0) {
      return true;
    }
  }
  return false;
}

// 淘汰count為0的獎項
function eliminateZeros(allprizies) {
  if (allprizies.length === 0) {
    return [];
  }
  const endIndex = allprizies.length - 1;
  for (let i = endIndex; i >= 0; i--) {
    if (allprizies[i].count <= 0) {
      allprizies.splice(i, 1);
    }
  }

  return allprizies;
}

// 數獎項共有幾個
function countPrizeNum(allprizies) {
  if (allprizies.length === 0) {
    return 0;
  }
  let num = 0;
  allprizies.forEach((prize) => {
    num += prize.count;
  });
  return num;
}
