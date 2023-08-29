import youbikeLogo from "icons/youbike_logo.svg";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  const navigate = useNavigate();
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
          <li>使用說明</li>
          <li>收費方式</li>
          <li>站點資訊</li>
          <li>最新消息</li>
          <li>活動專區</li>
        </ul>
      </div>
      <div className={styles.signinButton}>登入</div>
    </div>
  );
}
