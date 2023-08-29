import styles from "./Table.module.scss";

export default function Table() {
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
          <tr>
            <td>台北市</td>
            <td>松山區</td>
            <td>逼松山區松山區松山區松山區松山區逼</td>
            <td>12</td>
            <td>12</td>
          </tr>
          <tr>
            <td>台北市</td>
            <td>松山區</td>
            <td>逼松山區松山區松山區松山區松山區逼</td>
            <td>12</td>
            <td>12</td>
          </tr>
          <tr>
            <td>台北市</td>
            <td>松山區</td>
            <td>逼松山區松山區松山區松山區松山區逼</td>
            <td>12</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
