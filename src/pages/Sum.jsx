import { useRef, useState } from "react";

export default function Sum() {
  // 寫一個函式計算下列公式之總和：1+2-3+4-5+6-.....+ 或 -  N
  // N 一定是正整數

  // 排除0、負數、小數點
  const [total, setTotal] = useState(null);
  const nRef = useRef(null);
  let arr = null;

  const handleClick = () => {
    if (nRef.current < 1 || !Number.isInteger(Number(nRef.current))) {
      alert("n must be a positive integer");
    } else {
      arr = new Array(nRef.current);
      // 透過for loop迭代n個數
      for (let i = 1; i <= nRef.current; i++) {
        // 根據題目，從第二個奇數開始算起，都是負整數
        if (i !== 1 && i % 2 !== 0) {
          arr[i - 1] = i * -1;
          // 偶數以及1都是正整數
        } else {
          arr[i - 1] = i;
        }
      }
      setTotal(arr.reduce((accum, current) => accum + current, 0));
    }
  };

  return (
    <div className="pt-5 position-relative">
      <h1>Sum of 1+2-3+4-5...N</h1>
      <div className="input-group mb-3 position-relative">
        <input
          type="text"
          className="form-control"
          placeholder="plsease input the value of N"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          ref={nRef}
          onChange={(e) => {
            nRef.current = e.target.value;
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick();
            }
          }}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          sum
        </button>
      </div>
      {total !== null && <h3>value of sum = {total}</h3>}
      <a className="position-absolute top-0 end-0" href="/">
        返回首頁
      </a>
    </div>
  );
}
