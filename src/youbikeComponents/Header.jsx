import youbikeLogo from "icons/youbike_logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import hamburger from "icons/hamburger.svg";
import cross from "icons/cross.svg";
import styles from "./Header.module.scss";

export default function Header() {
  const navigate = useNavigate();
  const [headerMenuButton, setHeaderMenuButton] = useState(hamburger);
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <img
          className={styles.youbikeLogo}
          src={youbikeLogo}
          alt="youbike_logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <ul className={styles.navItem}>
          <li onClick={() => navigate("/youbike/manual")}>使用說明</li>
          <li onClick={() => navigate("/youbike/pay-method")}>收費方式</li>
          <li onClick={() => navigate("/youbike/station-info")}>站點資訊</li>
          <li onClick={() => navigate("/youbike/news")}>最新消息</li>
          <li onClick={() => navigate("/youbike/events")}>活動專區</li>
        </ul>
      </div>
      <div className={styles.signinButton}>登入</div>
      <input
        type="checkbox"
        id="hamburgerToggle"
        className={styles.hamburgerToggle}
        onChange={(e) => {
          const isHeaderMenuShow = e.target.checked;
          if (isHeaderMenuShow) {
            setHeaderMenuButton(cross);
          } else {
            setHeaderMenuButton(hamburger);
          }
        }}
      />
      <label htmlFor="hamburgerToggle" className={styles.label}>
        <img
          className={styles.hamburger}
          src={headerMenuButton}
          alt="hamburger"
        />
      </label>
      <ul className={styles.mobileNavItem}>
        <li>使用說明</li>
        <li>收費方式</li>
        <li>站點資訊</li>
        <li>最新消息</li>
        <li>活動專區</li>
      </ul>
    </div>
  );
}
